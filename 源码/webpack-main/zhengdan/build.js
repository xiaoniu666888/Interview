/* eslint-disable prettier/prettier */
const webpack = require("../lib/webpack.js");
const config = require("./webpack.config.js");
const compiler = webpack(config);

compiler.run((err, stats) => {
	if (err) {
		console.error(err);
	} else {
		
	}
});
