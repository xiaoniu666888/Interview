const XNEventStore = require('./手写全局状态管理')

const eventStore = new XNEventStore({
    state: {
        name: "xiaoniu",
        age: 18
    }
})

eventStore.onState("name", (value) => {
    console.log("name=>", value);
})