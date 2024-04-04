function deepCopy(obj) {
    if (!obj || typeof obj !== "object") return;
    let newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key]
        }
    }

    return newObj
}

const obj = {
    name: "陈宫",
    friend: {
        name: "吕布",
        age: 18
    }
}

let newObj = deepCopy(obj)
newObj.friend.age = 20
console.log(obj, newObj);