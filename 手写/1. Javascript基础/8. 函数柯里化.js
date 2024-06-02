// function curry(fn, args) {
//   // 获取函数所需要的参数的长度
//   let length = fn.length
//   args = args || []

//   return function () {
//     let subArgs = args.slice(0)
//     // 拼接得到现有的参数
//     for (let i = 0; i < arguments.length; i++) {
//       subArgs.push(arguments[i])
//     }
//     // 判断参数的长度是否已经满足函数所需参数的长度
//     if (subArgs.length >= length) {
//       // 满足则执行函数
//       return fn.apply(this, subArgs)
//     } else {
//       // 如果不满足，递归返回柯里化函数，等待参数的传入
//       return curry.call(this, fn, subArgs)
//     }
//   }
// }

// function xnCurring(fn) {
//   function curringFn(...args) {
//     // 两类操作:
//     // 第一类: 继续返回一个新的函数，继续接受参数
//     // 第二类: 直接执行fn中的函数
//     if (args.length >= fn.length) {
//       return fn(...args)
//     } else {
//       return function (...newArgs) {
//         return curringFn(...args.concat(...newArgs))
//       }
//     }
//   }
//   return curringFn
// }

function foo(a, b, c) {
  return a + b + c
}
const A = curry(foo, 1)
console.log(A(1)(2)(3))

function curry(fn) {
  function curried(...args) {
    // 第一种情况：继续返回一个函数，继续接受参数
    // 第二种情况：直接执行fn中的函数
    if (args.length >= fn.length) {
      return fn(...args)
    } else {
      return function (...subArgs) {
        return curried(...args.concat(...subArgs))
      }
    }
  }
  return curried
}
