// let a: {
//     b: number, // a有个类型为number的属性b
//     c?: string, // a可能有个类型为string的属性c,如果有属性c,其值可以为undefined
//     [key: number]: boolean // a可能有任意多个数字属性,其值为布尔值
// }
// a = { b: 1 }
// a = { b: 1, c: 'd' }
// a = { b: 1, 10: true }
// console.log(a[10])
// a = { b: 1, 10: true, 20: false }

// // a = { 10: true }  // 类型 "{ 10: true; }" 中缺少属性 "b"，但类型 "{ [key: number]: boolean; b: number; c?: string | undefined; }" 中需要该属性。

// // a = { b: 1, 33: 'red' } //不能将类型“string”分配给类型“boolean”。ts(2322)
// // 1.ts(4, 5): 所需类型来自此索引签名。


// // 索引签名中键的名称可以是任何词，不一定非得是key

// let airpalne: {
//     // [seatNumber]: number // 类型文本中的计算属性名称必须引用类型为文本类型或 "unique symbol" 类型的表达式
//     [seatNumber: number | string]: number
// }
// airpalne = {
//     '34D': 34,
//     34: 34
// }
// console.log(airpalne)
// // 键的类型(T)必须可赋值给number或者string, 这是因为JavaScript中对象的键是字符串,数组是特殊的对象,键是数字

// let a: {} = {
//     toString() {
//         return 3
//     }
// }

let b: Object = {

    // 不能将类型“() => number”分配给类型“() => string”。不能将类型“number”分配给类型“string”
    // toString() {
    //     return 3
    // },

    toString() {
        return '3'
    },
    valueOf() {
        return 3
    }

}
console.log(b.toString())

