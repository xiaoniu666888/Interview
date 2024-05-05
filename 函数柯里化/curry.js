// function foo(x, y, z) {
//     console.log(x + y + z);
// }
// function sum(sum1, sum2) {
//     return sum1 + sum2
// }


// function xnCurring(fn) {
//     function curringFn(...args) {
//         // 两类操作:
//         // 第一类: 继续返回一个新的函数，继续接受参数
//         // 第二类: 直接执行fn中的函数
//         console.log(args)
//         if (args.length >= fn.length) {
//             return fn(...args)
//         } else {
//             return function (...newArgs) {
//                 let arr = args.concat(newArgs)
//                 return curringFn(...arr)
//             }
//         }
//     }
//     return curringFn
// }
// var fooCurry = xnCurring(foo)
// // fooCurry(10)(20)(30)
// // fooCurry(1, 2, 3)
// fooCurry(1)(2,3)


