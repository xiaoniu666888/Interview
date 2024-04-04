// 存储副作用函数的桶
const bucket = new Set()

// 原始数据
const data = {
    text: "Hello Vue3"
}
// 对原始数据进行代理
const obj = new Proxy(data, {
    // 拦截读取操作
    get(target, key) {
        // 将副作用函数添加到存储副作用函数的桶中
        bucket.add(effect)
        console.log("触发读取操作")
        // 返回属性值
        return target[key]
    },

    // 拦截设置操作
    set(target, key, newVal) {
        // 设置属性值
        target[key] = newVal
        console.log("触发设置操作")
        // 把副作用函数从桶里取出并执行
        bucket.forEach(fn => fn())
        return true
    }
})


// 执行effect函数会触发读取操作
// effect函数依赖数据，数据是被依赖的
function effect() {
    document.body.innerText = obj.text
}
// 执行副作用函数，触发读取
effect()
// 1s后修改响应式数据
setTimeout(() => {
    obj.text = 'Helle Proxy'
}, 1000)