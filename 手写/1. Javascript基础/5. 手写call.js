Function.prototype.myCall = function (context) {
  // 判断调用对象
  if (typeof this !== "function") {
    throw TypeError("type error")
  }
  // 获取参数
  let args = [...arguments].slice(1)
  let res = null
  if (typeof context !== "object") {
    context = Object(context)
  }
  // 判断是否传入context,未传入就设置为window
  context = context || window
  console.log(this)
  // 将调用函数设为对象的方法
  context.fn = this
  // 调用函数
  res = context.fn(...args)
  // 将属性删除
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
foo.myCall("a", "小牛", 18)
