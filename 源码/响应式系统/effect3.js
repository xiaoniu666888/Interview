// 当读取操作发生的时候, 将副作用函数收集到桶中
// 当设置操作发生的时候, 将副作用函数从桶里取出来并执行

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
const obj = new Proxy(data, {
  get(target, key) {
    // 收集副作用函数
    if (activeEffect) {
      bucket.add(activeEffect)
    }
    return target[key]
  },
  set(target, key, newVal) {
    target[key] = newVal
    // 取出副作用函数并执行
    bucket.forEach((fn) => fn())
  }
})

// 使用effect函数
// effect(() => {
//   document.body.innerHTML = obj.text
// })
effect(() => {
  console.log("effect run")
  document.body.innerText = obj.text
})
setTimeout(() => {
  // 副作用函数没有读取这个属性, 但是这里也执行了
  // 为什么会执行, 因为这里设置了obj的属性, 所以触发了effect的设置操作, 然后就会从桶里获取副作用函数并执行
  obj.noExist = "hello vue3"
}, 1000)
