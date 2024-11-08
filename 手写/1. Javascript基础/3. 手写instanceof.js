// function myInstance(obj, constructor) {
//   let proto = Object.getPrototypeOf(obj)
//   let prototype = constructor.prototype

//   while (true) {
//     if (!proto) {
//       return false
//     }
//     if (proto === prototype) {
//       return true
//     }
//     proto = Object.getPrototypeOf(proto)
//   }
// }

// 1. 左边是实例，右边是构造函数
// 2. 获取实例的内部指针指向的原型，获取构造函数的原型对象，也就是prototype属性
// 3. 在while循环中进行比较
// 4. 判断内部指针指向的原型是否是构造函数的prototype属性，不是就继续遍历下去，直到遍历到最后一个

// function myInstanceOf(left, right) {
//   let proto = Object.getPrototypeOf(left)
//   let prototype = right.prototype

//   while (true) {
//     if (!proto) {
//       return false
//     }
//     if (proto === prototype) {
//       return true
//     }
//     proto = Object.getPrototypeOf(proto)
//   }
// }
// let obj = Object.create(null)
// console.log(myInstanceOf(obj, Object)) // false

function myInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left)
  let prototype = right.prototype
  while (true) {
    if (!proto) {
      return false
    }
    if (proto === prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
}

function F() {}
const f = new F()
console.log(myInstanceOf(f, F))

console.log(myInstanceOf(f, Object))
console.log(myInstanceOf(F, Object))
console.log(myInstanceOf(F, Function))
console.log(myInstanceOf(Function, Object))
console.log(myInstanceOf(Object, Function))

function myInstance2(left, right) {
  let proto = Object.getPrototypeOf(left)
  let prototype = right.prototype
  while (true) {
    if (proto === prototype) {
      return true
    }
    if (!proto) {
      return false
    }
    proto = Object.getPrototypeOf(proto)
  }
}
