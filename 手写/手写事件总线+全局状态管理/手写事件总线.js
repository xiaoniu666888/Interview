class XNEventBus {
    constructor() {
        this.eventBus = {}
    }
    // 注册
    on(eventName, eventCallback, thisArg) {
        let handlers = this.eventBus[eventName]
        if (!handlers) {
            handlers = []
            this.eventBus[eventName] = handlers
        }
        handlers.push({
            eventCallback,
            thisArg
        })
        return this
    }
    // 派发
    emit(eventName, ...payload) {
        const handlers = this.eventBus[eventName] || []
        handlers.forEach(handler => {
            handler.eventCallback.apply(handler.thisArg, payload)
        })
        return this
    }

    // 取消
    off(eventName, eventCallback) {
        const handlers = this.eventBus[eventName]
        // 复制一份,做到不改动原数据
        const newHandlers = [...handlers]
        for (let i = 0; i < newHandlers.length; i++) {
            const hadler = newHandlers[i]
            if (hadler.eventCallback === eventCallback) {
                const index = handlers.indexOf(hadler)
                handlers.splice(index, 1)
            }
        }
        if (handlers.length === 0) {
            delete this.eventBus[eventName]
        }
    }
}

module.exports = XNEventBus