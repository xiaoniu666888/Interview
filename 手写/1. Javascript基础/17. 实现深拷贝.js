function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj
  }
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}
