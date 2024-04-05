let a = Symbol('a')
let b: symbol = Symbol('b')
var c = a === b
// let d = a + 'x' // “+”运算符不能应用于类型 "symbol"
// 1.ts:4:9 - error TS2469: The '+' operator cannot be applied to type 'symbol'.
// console.log(a, b, c)
const e = Symbol('e') // 类型推断 typeof e
const f: unique symbol = Symbol('f') // typeof f

// let g: unique symbol = Symbol('f') // 类型为 "unique symbol" 的变量必须为 "const"
// 1.ts:9:5 - error TS1332: A variable whose type is a 'unique symbol' type must be 'const'.

let h = e === e

// let i = e === f //此比较似乎是无意的，因为类型“typeof e”和“typeof f”没有重叠
// 1.ts:12:9 - error TS2367: This comparison appears to be unintentional because the types 'typeof e' and 'typeof f' have no overlap.
export { }


