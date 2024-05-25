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

function myAssign(target, ...sources) {
  if (target === null || typeof target !== "object") {
    throw TypeError(`${target}不能是null或者undefined,应为object`);
  }
  for (let source of sources) {
    if (source === null || typeof source !== "object") continue;
    for (let key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
// 使用示例
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let obj3 = { c: 3 };

let mergedObj = myAssign({ a: 3 }, obj1, obj2, obj3);
console.log(mergedObj);
