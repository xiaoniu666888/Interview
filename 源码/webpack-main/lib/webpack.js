/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");
const webpackOptionsSchemaCheck = require("../schemas/WebpackOptions.check.js");
const webpackOptionsSchema = require("../schemas/WebpackOptions.json");
const Compiler = require("./Compiler");
const MultiCompiler = require("./MultiCompiler");
const WebpackOptionsApply = require("./WebpackOptionsApply");
const {
	applyWebpackOptionsDefaults,
	applyWebpackOptionsBaseDefaults
} = require("./config/defaults");
const { getNormalizedWebpackOptions } = require("./config/normalization");
const NodeEnvironmentPlugin = require("./node/NodeEnvironmentPlugin");
const memoize = require("./util/memoize");

/** @typedef {import("../declarations/WebpackOptions").WebpackOptions} WebpackOptions */
/** @typedef {import("../declarations/WebpackOptions").WebpackPluginFunction} WebpackPluginFunction */
/** @typedef {import("./Compiler").WatchOptions} WatchOptions */
/** @typedef {import("./MultiCompiler").MultiCompilerOptions} MultiCompilerOptions */
/** @typedef {import("./MultiStats")} MultiStats */
/** @typedef {import("./Stats")} Stats */

const getValidateSchema = memoize(() => require("./validateSchema"));

/**
 * @template T
 * @callback Callback
 * @param {Error | null} err
 * @param {T=} stats
 * @returns {void}
 */

/**
 * @param {ReadonlyArray<WebpackOptions>} childOptions options array
 * @param {MultiCompilerOptions} options options
 * @returns {MultiCompiler} a multi-compiler
 */
const createMultiCompiler = (childOptions, options) => {
	const compilers = childOptions.map((options, index) =>
		createCompiler(options, index)
	);
	const compiler = new MultiCompiler(compilers, options);
	for (const childCompiler of compilers) {
		if (childCompiler.options.dependencies) {
			compiler.setDependencies(
				childCompiler,
				childCompiler.options.dependencies
			);
		}
	}
	return compiler;
};

/**
 * @param {WebpackOptions} rawOptions options object
 * @param {number} [compilerIndex] index of compiler
 * @returns {Compiler} a compiler
 */
// 创建一个compiler, 并且返回一个compiler对象
const createCompiler = (rawOptions, compilerIndex) => {
	// 生成一个规范的options对象
	const options = getNormalizedWebpackOptions(rawOptions);
	// 设置默认值
	applyWebpackOptionsBaseDefaults(options);
	// 创建一个compiler实例
	const compiler = new Compiler(
		/** @type {string} */ (options.context),
		options
	);
	// 注册插件
	new NodeEnvironmentPlugin({
		infrastructureLogging: options.infrastructureLogging
	}).apply(compiler);
	// 注册我们传入的所有webpack插件plugins
	if (Array.isArray(options.plugins)) {
		for (const plugin of options.plugins) {
			// 传入的插件是函数形式
			if (typeof plugin === "function") {
				/** @type {WebpackPluginFunction} */
				(plugin).call(compiler, compiler);
			} else if (plugin) {
				// 传入的插件是对象形式
				plugin.apply(compiler);
			}
		}
	}
	const resolvedDefaultOptions = applyWebpackOptionsDefaults(
		options,
		compilerIndex
	);
	if (resolvedDefaultOptions.platform) {
		compiler.platform = resolvedDefaultOptions.platform;
	}
	// 调用compiler的environment和afterEnvironment钩子
	compiler.hooks.environment.call();
	compiler.hooks.afterEnvironment.call();
	// 使用process函数处理其他选项, 比如entry, output, externals
	new WebpackOptionsApply().process(options, compiler);
	compiler.hooks.initialize.call();
	return compiler;
};

/**
 * @callback WebpackFunctionSingle
 * @param {WebpackOptions} options options object
 * @param {Callback<Stats>=} callback callback
 * @returns {Compiler} the compiler object
 */

/**
 * @callback WebpackFunctionMulti
 * @param {ReadonlyArray<WebpackOptions> & MultiCompilerOptions} options options objects
 * @param {Callback<MultiStats>=} callback callback
 * @returns {MultiCompiler} the multi compiler object
 */

/**
 * @template T
 * @param {Array<T> | T} options options
 * @returns {Array<T>} array of options
 */
const asArray = options =>
	Array.isArray(options) ? Array.from(options) : [options];

// webpack 函数 作用: 创建一个compiler对象，并且返回一个compiler对象，或者返回一个multiCompiler对象
const webpack = /** @type {WebpackFunctionSingle & WebpackFunctionMulti} */ (
	/**
	 * @param {WebpackOptions | (ReadonlyArray<WebpackOptions> & MultiCompilerOptions)} options options
	 * @param {Callback<Stats> & Callback<MultiStats>=} callback callback
	 * @returns {Compiler | MultiCompiler | null} Compiler or MultiCompiler
	 */
	(options, callback) => {
		const create = () => {
			// 作用: 校验options是否符合webpackOptionsSchema
			if (!asArray(options).every(webpackOptionsSchemaCheck)) {
				// 警告
				getValidateSchema()(webpackOptionsSchema, options);
				util.deprecate(
					() => {},
					"webpack bug: Pre-compiled schema reports error while real schema is happy. This has performance drawbacks.",
					"DEP_WEBPACK_PRE_COMPILED_SCHEMA_INVALID"
				)();
			}
			/** @type {MultiCompiler|Compiler} */
			let compiler;
			/** @type {boolean | undefined} */
			let watch = false;
			/** @type {WatchOptions|WatchOptions[]} */
			let watchOptions;
			if (Array.isArray(options)) {
				/** @type {MultiCompiler} */
				compiler = createMultiCompiler(
					options,
					/** @type {MultiCompilerOptions} */ (options)
				);
				watch = options.some(options => options.watch);
				watchOptions = options.map(options => options.watchOptions || {});
			} else {
				const webpackOptions = /** @type {WebpackOptions} */ (options);
				/** @type {Compiler} */
				compiler = createCompiler(webpackOptions);
				watch = webpackOptions.watch;
				watchOptions = webpackOptions.watchOptions || {};
			}
			// 返回一个对象, 包含compiler对象，是否watch，watchOptions
			return { compiler, watch, watchOptions };
		};
		if (callback) {
			try {
				const { compiler, watch, watchOptions } = create();
				if (watch) {
					compiler.watch(watchOptions, callback);
				} else {
					compiler.run((err, stats) => {
						compiler.close(err2 => {
							callback(
								err || err2,
								/** @type {options extends WebpackOptions ? Stats : MultiStats} */
								(stats)
							);
						});
					});
				}
				return compiler;
			} catch (err) {
				// 异步调用
				process.nextTick(() => callback(/** @type {Error} */ (err)));
				return null;
			}
		} else {
			// 创建complier对象
			// 注册所有的plugin
			const { compiler, watch } = create();
			if (watch) {
				util.deprecate(
					() => {},
					"A 'callback' argument needs to be provided to the 'webpack(options, callback)' function when the 'watch' option is set. There is no way to handle the 'watch' option without a callback.",
					"DEP_WEBPACK_WATCH_WITHOUT_CALLBACK"
				)();
			}
			return compiler;
		}
	}
);

module.exports = webpack;
