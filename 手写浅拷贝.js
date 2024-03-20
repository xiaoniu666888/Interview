// 浅拷贝
function shallowCopy(object) {
    // 只拷贝引用类型的
    if (!object || typeof object !== "object") return;
    // 判断新建一个空白数组还是对象
    let newObject = Array.isArray(object) ? [] : {}
    // 遍历
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[key] = object[key]
        }
    }

    return newObject
}

// const arr = [1, 2, 3, 4, 5]
// const newArr = shallowCopy(arr)
// console.log(newArr);
const obj = {
    name: "陈宫",
    friend: {
        name: "吕布",
        age: 18
    }
}

const newObj = shallowCopy(obj)
newObj.friend.age = 19
console.log(obj, newObj)



function shallow(obj) {
    if (!obj || typeof obj !== "object") return;

    let newObj = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
}