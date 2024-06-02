Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("type error")
  }
  // 获取参数
  let args = arguments[1]
  let res = null
  if (typeof context !== "object") {
    context = Object(context)
  }
  context = context || window
  context.fn = this
  res = context.fn(...args)
  delete context.fn
  return res
}

function foo(name, age) {
  console.log(this)
  console.log(name, age)
}
let obj = {
  a: 1
}
obj.foo = foo
foo.myApply("a", ["小牛", 18])
