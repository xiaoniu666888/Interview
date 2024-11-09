// Function.prototype.myCall = function (context) {
//   // 这里的this就是要执行的方法
//   if (typeof this !== "function") {
//     console.error("type error")
//   }
//   let args = [...arguments].slice(1)
//   let result = null
//   context = context || window
//   context.fn = this
//   result = context.fn(...args)
//   delete context.fn
//   return result
// }

Function.prototype.myCall = function (context, ...args) {
  // 判断调用myCall的是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myCall - 被调用的对象必须是函数")
  }
  // 如果没有传入上下文对象，则默认为全局对象
  // ES11 引入了 globalThis，它是一个统一的全局对象
  // 无论在浏览器还是 Node.js 中，都可以使用 globalThis 来访问全局对象。
  context = context || globalThis
  // 用Symbol来创建唯一的fn，防止名字冲突
  let fn = Symbol("key")
  // this是调用myCall的函数，将函数绑定到上下文对象的新属性上
  context[fn] = this
  // 传入MyCall的多个参数
  const result = context[fn](...args)
  // 将增加的fn方法删除
  delete context[fn]
  return result
}

function foo(name, age) {
  console.log(this, name, age)
}
foo.call({ a: 1 })
foo.myCall({ a: 1 })
