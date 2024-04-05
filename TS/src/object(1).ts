// let a: object = {
//     b: 'x'
// }
// console.log(a.b) // 类型“object”上不存在属性“b”
// 1.ts:4:15 - error TS2339: Property 'b' does not exist on type 'object'

/**
 * 对象字面量语法
 */
// let a = {
//     b: 'x'
// }
// console.log(a.b)

// let a: { b: number } = {
//     b: 12
// }
// console.log(a.b)

// const a: { b: number } = {
//     b: 12
// }
// console.log(a.b)

// let c: {
//     firstName: string,
//     lastName: string
// } = {
//     firstName: 'john',
//     lastName: 'barrowanm'
// }

// class Person {
//     constructor(public firstName: string, public lastName: string) { }
//     // public 是this.firstName = firstName 的简写形式,只能在ts中使用
// }
// c = new Person('matt', 'smith')
// console.log(c)

// let a: { b: number }
// a = {} // 类型 "{}" 中缺少属性 "b"，但类型 "{ b: number; }" 中需要该属性

// a = {
//     b: 1,
//     c: 2 // 对象字面量只能指定已知属性，并且“c”不在类型“{ b: number; }”中
// }
// 1.ts:45:5 - error TS2353: Object literal may only specify known properties, and 'c' does not exist in type '{ b: number; }


// let i: number;
// let j = i * 3 //在赋值前使用了变量“i”。

// let i
// let j = i*3 //“i”可能为“未定义”
