let a = 1234n;
const b = 5678n
var c = a + b
let d = a < 1235
// let e = 88.5n BigInt 字面量必须是整数
// 1.ts:5:9 - error TS1353: A bigint literal must be an integer
let f: bigint = 100n
let g: 100n = 100n
// let h: bigint = 100 // 不能将类型“number”分配给类型“bigint”
// 1.ts:9:5 - error TS2322: Type 'number' is not assignable to type 'bigint'
export { }