let a = 1234
var b = Infinity * 0.10
const c = 5678
let d = a < b
let e: number = 100
let f: 26.218 = 26.218
// let g: 26.218 = 10 // 不能将类型“10”分配给类型“26.218”。
// 运行报错 1.ts:7:5 - error TS2322: Type '10' is not assignable to type '26.218'
let oneMillion = 1_000_000 // 等同于1000000
console.log(oneMillion)
let twoMillion: 2_000_000 = 2_000_000
// twoMillion = 1  警告：不能将类型“1”分配给类型“2000000”
console.log(twoMillion)
export { }
