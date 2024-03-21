const EventBus = require("./手写事件总线")
class XNEventStore {
    constructor(options) {

        // 将传进来的对象的属性分别赋值给类的相应属性
        this.actions = options.actions
        this.state = options.state
        this._observe(options.state)
        // 创建两个事件总线
        this.event = new EventBus()
    }

    _observe(state) {
        const _this = this
        Object.keys(state).forEach(key => {
            let _value = state[key]
            Object.defineProperty(state, key, {
                get: function () {
                    return _value
                },
                set: function (newValue) {
                    if (_value === newValue) return
                    _value = newValue
                    _this.event.emit(key, _value)
                }
            })
        })
    }

    onState(stateKey, stateCallback) {
        // 注册
        this.event.on(stateKey, stateCallback)

        const value = this.state[stateKey]
        // 执行回调函数并将this绑定为this.state, 将参数传到回调函数
        stateCallback.apply(this.state, [value])
    }

    setState(stateKey, stateValue) {
        this.state[stateKey] = stateValue
    }

    dispatch(actionName, ...args) {
        const actionFn = this.actions[actionName]
        actionFn.apply(this, [this.state, ...args])
    }
}

module.exports = XNEventStore