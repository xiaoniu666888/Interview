Function.prototype.myBind = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("type error")
  }

  // 获取参数
  let args = [...arguments].slice(1)
  let fn = this
  return function Fn() {
    // 根据调用方式的不同，传入不同的绑定值
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    )
  }
}

function foo() {
  console.log("=>", this)
}

let bind = foo.bind("aaa")
bind()
new bind()
