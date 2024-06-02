function newOperator(constructor, ...args) {
  if (typeof constructor !== "function") {
    throw TypeError("constructor不是一个构造函数")
  }
  let obj = Object.create(constructor.prototype)
  let res = constructor.apply(obj, args)
  let flag = res && (typeof res === "object" || typeof res === "function")

  return flag ? res : obj
}
// 1. 创建一个空对象
// 2. 将这个空对象的隐式原型指向构造函数的原型
// 3. 将this指向这个空对象
// 4. 执行构造函数内部的代码
// 5. 如果构造函数返回非空对象，那就返回这个非空对象；否则返回刚创建的对象
function Person(name, age) {
  this.name = name
  this.age = age
  return { a: 666 }
}

const child = newOperator(Person, "小牛", 18)
console.log(child) // { a: 666 }

function myNew(constructor, ...args) {
  if (typeof constructor !== "function") {
    throw `type error`
  }
  let obj = Object.create(constructor.prototype)
  let res = constructor.apply(obj, args)
  let bol = res && (typeof res === "object" || typeof res === "function")

  return bol ? res : obj
}

const childTwo = myNew(Person, "小牛", 18)
console.log(childTwo) // { a: 666 }
