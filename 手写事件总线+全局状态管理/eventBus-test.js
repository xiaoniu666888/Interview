const XNEventBus = require("./手写事件总线")

const eventBus = new XNEventBus()

const testCallback1 = (...payload) => {
    console.log("whyCallback1:", payload)
}
const testCallback2 = (...payload) => {
    console.log("whyCallback2:", payload)
}

eventBus.on("test1", testCallback1)
// eventBus.on("test1", testCallback2)


eventBus.emit("test1", "abc", "cba", "nba")
eventBus.emit("test1", "aaa", "bbb", "ccc")


