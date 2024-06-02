function getType(value) {
  // 判断数据是null
  if (value === null) {
    return value + ""
  }
  // 数据是引用类型

  let valueClass = Object.prototype.toString
    .call(value)
    .slice(8, -1)
    .toLowerCase()
  return valueClass
}
console.log(getType(null))
console.log(getType(Date.now()))
