// Function.prototype.myApply = function (context, args = []) {
//   if (typeof this !== "function") {
//     throw new TypeError("Function.prototype.myApply - 被调用的对象必须是函数")
//   }
//   context = context || globalThis
//   let fn = Symbol("key")
//   context[fn] = this
//   const result = context[fn](...args)
//   delete context[fn]
//   return result
// }

Function.prototype.myApply = function (context, argsArr) {
  // 判断调用myApply的是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myApply - 被调用的对象必须是函数")
  }

  // 判断传入的参数是否为数组
  if (argsArr && !Array.isArray(argsArr)) {
    throw new TypeError("Function.prototype.myApply - 第二个参数必须是数组")
  }

  // 如果没有传入上下文对象，则默认为全局对象
  // ES11 引入了 globalThis，它是一个统一的全局对象
  // 无论在浏览器还是 Node.js 中，都可以使用 globalThis 来访问全局对象。
  context = context || globalThis

  //如果第二个参数省略则赋值空数组
  argsArr = argsArr || []

  // 用Symbol来创建唯一的fn，防止名字冲突
  let fn = Symbol("key")

  // this是调用myApply的函数，将函数绑定到上下文对象的新属性上
  context[fn] = this

  // 传入myApply的多个参数
  const result = context[fn](...argsArr)

  // 将增加的fn方法删除
  delete context[fn]

  return result
}

const test = {
  name: "xxx",
  hello: function () {
    console.log(`hello,${this.name}!`)
  },
  add: function (a, b) {
    return a + b
  }
}
const obj = { name: "world" }
test.hello.apply(obj)
test.hello.myApply(obj)
