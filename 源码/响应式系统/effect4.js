// 存储副作用函数的桶
const bucket = new Set()
// 原始数据
const data = {
  text: "hello word"
}
// 用一个全局变量存储被注册的副作用函数
let activeEffect
// effect函数用于注册副作用函数
function effect(fn) {
  // 当调用effect注册副作用函数的时候, 将副作用函数 fn  赋值给activeEffect
  activeEffect = fn
  fn()
}

// 为了解决上边的问题, 可以用
