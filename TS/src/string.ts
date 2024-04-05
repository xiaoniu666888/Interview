let a = '10'
var b = 'billy'
const c = '!'
let d = a + ' ' + b + c
let e: string = 'zoom'
let f: 'john' = 'john'
// let g: 'john' = 'zoe' //不能将类型“"zoe"”分配给类型“"john"”
// 1.ts:7:5 - error TS2322: Type '"zoe"' is not assignable to type '"john"'.
console.log(d)
export { }