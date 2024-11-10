Function.prototype.myBind = function (context) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not a function`)
  }
  let args = [...arguments].slice(1)
  let fn = this
  function Fn() {
    // 考虑通过 new 调用的时候
    let _this = this instanceof Fn ? this : context
    return fn.apply(_this, args.concat(...arguments))
  }
  Fn.prototype = Object.create(this.prototype)
  return Fn
}
function foo() {
  console.log("foo", this)
}
let bind = foo.myBind("aaa")
bind() // "aaa"
new bind() // Fn{}  // new 的优先级高于bind
