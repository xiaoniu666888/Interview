type Age = number
type Person = {
    name: string,
    age: Age
}
let age: Age = 18
let driver: Person = {
    name: 'James',
    age: age
}
// console.log(driver)




type Color = 'red'
// type Color = 'blue'  // 标识符“Color”重复
let x = Math.random() < .5
// 和let和const一样,类型别名使用的是块级作用域
if (x) {
    type Color = 'blue'
    let b: Color = 'blue'
    // console.log(x, b)
} else {
    let c: Color = 'red'
    // console.log(x, c)
}

// 并集 --> 符号: |
// 交集 --> 符号: &
type Cat = { name: string, purrs: boolean }
type Dog = { name: string, barks: boolean, wags: boolean }
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

// Cat
let a: CatOrDogOrBoth = {
    name: "Bonkers",
    purrs: true
}

// Dog
a = {
    name: "Domino",
    barks: true,
    wags: true
}

// 二者兼具
a = {
    name: "Donkers",
    barks: true,
    purrs: true,
    wags: false
}

// 一个并集类型的值不一定属于并集中某一个成员,还可以同时属于每个成员,但是如果并集不相交,那么值只能属于并集类型中的某个成员
let b: CatAndDog = {
    name: "Domino",
    barks: true,
    purrs: true,
    wags: true
}
// console.log(a, b)

function abTest(a: string, b: number) {
    return a || b
}
console.log(abTest('a', 1))
export { }