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
const bucket = new WeakMap()    //  target

// 原始数据
const data = {
    text: "Hello Vue3"
}

const obj = new Proxy(data, {
    // 拦截读取操作
    get(target, key) {
        // 没有activeEffect直接返回
        if (!activeEffect) return
        // 根据target从桶中取得depsMap,这也是一个Map类型, key --> effects
        let depsMap = bucket.get(target)
        if (!depsMap) {
            bucket.set(target, (depsMap = new Map()))
        }
        // 再根据key从depsMap中取得deps,它是一个Set类型
        // 里面存储着所有与key相关联的副作用函数: effects
        let deps = depsMap.get(key)
        // 如果不存在,还是新建一个Set并与key关联
        if (!deps) {
            depsMap.set(key, (deps = new Set()))
        }
        // 最后将当前激活的副作用函数添加到桶里
        deps.add(activeEffect)
        console.log("触发读取操作")
        return target[key]
    },
    set(target, key, newVal) {
        // 设置属性值
        target[key] = newVal;
        // 根据target从桶中取得depsMap, 它是 key --> effects
        let depsMap = bucket.get(target)
        if (!depsMap) return
        // 根据key取得所有的副作用函数effects
        const effects = depsMap.get(key)
        // 执行副作用函数
        effects && effects.forEach(fn => fn())
        console.log("触发设置操作")
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