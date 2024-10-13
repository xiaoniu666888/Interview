// function myAssign(target, ...sources) {
//   if (target === null || typeof target !== "object") {
//     throw TypeError(`${target}不能是null或undefined,应为object`);
//   }
//   for (let source of sources) {
//     if (source === null || typeof source !== "object") continue;
//     for (let key in source) {
//       // 如果源对象有自己的属性（不是从原型链继承来的）
//       if (Object.prototype.hasOwnProperty.call(source, key)) {
//         target[key] = source[key];
//       }
//     }
//   }
//   return target;
// }

// function myAssign(target, ...sources) {
//   if (target === null || typeof target !== "object") {
//     throw TypeError(`${target}不能是null或者undefined,应为object`);
//   }
//   for (let source of sources) {
//     if (source === null || typeof source !== "object") continue;
//     for (let key in source) {
//       if (Object.prototype.hasOwnProperty.call(source, key)) {
//         target[key] = source[key];
//       }
//     }
//   }
//   return target;
// }

function myAssign(target, ...sources) {
  if (target === null || typeof target !== "object") {
    throw TypeError(`${target}不能为null或undefined,应为object`)
  }
  for (let source of sources) {
    if (source === null || typeof source !== "object") continue
    for (let key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key]
      }
    }
  }
  return target
}

// 使用示例
let obj1 = { a: 1 }
let obj2 = { b: 2 }
let obj3 = { c: 3 }
let obj4 = { c: 6 }
let mergedObj = myAssign({ a: 3 }, obj1, obj2, obj3, obj4)
// console.log(mergedObj)

// 1. 先检查target是否为对象类型，不是就返回
// 2. 然后循环遍历传进来的源对象，不是对象的直接跳出循环
// 3. 再循环遍历每个源对象上的属性，查看这些属性是否是自己的属性，有可能是原型上的属性
// 4. 将每个源对象上属于自己的属性赋值给target

function myAssign2(target, ...sources) {
  if (typeof target !== "object" || typeof target === null) {
    throw TypeError(`${target}不能为undefined或null,应为object`)
  }
  for (const source of sources) {
    if (typeof source !== "object" || typeof source === null) {
      continue
    }
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key]
      }
    }
  }
  return target
}
let a = { name: "a" }
let b = { age: 18 }

let res = myAssign2({ name: "b" }, a, b, 12)
console.log(res)
