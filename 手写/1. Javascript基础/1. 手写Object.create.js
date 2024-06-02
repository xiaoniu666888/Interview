// function myCreate(proto, propertiesObject = undefined) {
//   // 1. 创建一个空对象
//   function F() {}
//   // 2. 将传入的proto设置为这个空对象的原型
//   F.prototype = proto;
//   // 3. 使用new F()创建一个空对象，原型就是proto
//   let obj = new F();
//   // 4. 如果提供了属性，那就添加到新对象上
//   if (propertiesObject) {
//     for (let key in propertiesObject) {
//       obj[key] = propertiesObject[key];
//     }
//   }
//   return obj;
// }
// const o = {
//   name: "o",
//   getMyname() {
//     console.log(this.name);
//   },
// };
// const obj = myCreate(o);
// console.log(obj.name);
obj.getMyname()

// function myCreate(proto, propertiesObject) {
//   function F() {}

//   F.prototype = proto;
//   let obj = new F();

//   if (propertiesObject) {
//     for (let key in propertiesObject) {
//       obj[key] = propertiesObject[key];
//     }
//   }
//   return obj;
// }

function myCreate(obj) {
  function F() {}

  F.prototype = obj
  return new F()
}
