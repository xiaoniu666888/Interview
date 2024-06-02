function shallowCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj
  }
  let newObj = obj instanceof Array ? [] : {}

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

// 1. 如果传进来的不是对象或者是null，直接返回
// 2. 初始化一个新的数组或者对象(取决于传进来的是对象还是数组)
// 3.
