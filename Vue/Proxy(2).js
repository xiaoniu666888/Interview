// 用一个全局变量存储被注册的副作用函数
let activeEffect;
// effect函数用于注册副作用函数
function effect(fn) {
    // 当调用effect注册副作用函数时，将副作用函数fn赋值给activeEffect
    activeEffect = fn;
    // 执行副作用函数
    fn()
}



// 存储副作用函数的桶
const bucket = new Set()

// 原始数据
const data = {
    text: "Hello Vue3"
}

const obj = new Proxy(data, {
    get(target, key) {
        // 将activeEffect中存储的副作用函数收集到桶中
        if (activeEffect) {
            bucket.add(activeEffect)
        }
        console.log("触发读取操作")
        return target[key]
    },
    set(target, key, newVal) {
        target[key] = newVal
        console.log("触发设置操作")
        bucket.forEach(fn => fn())
        return true
    }
})

// 使用副作用函数
effect(() => {
    console.log('effect run')
    document.body.innerText = obj.text
})

setTimeout(() => {
    obj.notExit = "Hello Vue3"
}, 1000)