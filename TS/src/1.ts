let a = [1, 2, 3]   // number[]

let b = ['a', 'b']  // string[]
// b.push(1)  类型“number”的参数不能赋给类型“string”的参数

let c: string[] = ['a', 'b']  //string[]
let d = [1, 'a']    // (string | number)[]
const e = [2, 'b']  // (string | number)[]

let f = ['red']
f.push('blue')
// f.push(true)
// Argument of type 'boolean' is not assignable to parameter of type 'string'.

let g = [] // any[]
g.push(1)
let g1 = g
g.push('red') // number[]
let g2 = g   // (string | number)[]

let h: number[] = [] // number[]
h.push(1)
let h1 = h // number[]
// h.push('red') // 类型“string”的参数不能赋给类型“number”的参数


// 另一种数组类型写法 Array[]
let i: Array<number> = []
let j: Array<string> = []
let k: Array<number | string> = []

// T[]写法
let l: (string | number)[] = []

function buildArray() {
    let a = []
    a.push(1)
    a.push('red')
    return a
}
// 当数组离开定义时所在的作用域后, Typescript将最终确定一个类型，不再扩张
let myArray = buildArray() // (string | number)[]
// 类型“void”上不存在属性“push”
// 1.ts:43:9 - error TS2339: Property 'push' does not exist on type 'void'
console.log(myArray)