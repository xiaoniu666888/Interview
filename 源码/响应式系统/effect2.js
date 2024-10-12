// 怎么实现响应式
// 1. 副作用函数执行时, 触发obj.text的读取操作
// 2. 当修改obj.text时, 触发obj.text的设置操作

// 把副作用函数存储到一个桶里, 当设置字段obj.text时, 将这些副作用函数从桶里取出来并执行

// 存储副作用函数的桶
const bucket = new Set()
// 原始数据
const data = {
  text: "hello word"
}
// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 这个时候将副作用函数effect添加到桶里
    bucket.add(effect)
    return target[key]
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶里取出来执行
    bucket.forEach((fn) => fn())
    return true
  }
})
function effect() {
  document.body.innerHTML = obj.text
}
// 执行副作用函数
effect()
// 1s后修改响应式数
setTimeout(() => {
  obj.text = "hello vue3"
}, 1000)
