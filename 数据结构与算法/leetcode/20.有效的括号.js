/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//   let arr = []
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       arr.push(")")
//     } else if (s[i] === "[") {
//       arr.push("]")
//     } else if (s[i] === "{") {
//       arr.push("}")
//     } else {
//       if (s[i] !== arr.pop()) {
//         return false
//       }
//     }
//   }
//   return arr.length === 0
// }

// map的方式做
// var isValid = function (s) {
//   let map = {
//     "(": ")",
//     "[": "]",
//     "{": "}"
//   }
//   let arr = []
//   for (const i of s) {
//     if (i in map) {
//       arr.push(i)
//       continue
//     }
//     if (i !== map[arr.pop()]) {
//       return false
//     }
//   }
//   return arr.length === 0
// }

// 使用switch
var isValid = function (s) {
  let arr = []
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "{":
        arr.push("}")
        break
      case "[":
        arr.push("]")
        break
      case "(":
        arr.push(")")
        break
      default:
        if (s[i] !== arr.pop()) {
          return false
        }
    }
  }
  return arr.length === 0
}
// @lc code=end
