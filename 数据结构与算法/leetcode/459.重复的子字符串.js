/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 移动匹配的解法, 很巧妙
// var repeatedSubstringPattern = function (s) {
//   let tem = s
//   s += s
//   s = s.substring(1, s.length - 1)
//   return s.includes(tem)
// }

// KMP解法
// var repeatedSubstringPattern = function (s) {
//   if (s.length === 0) {
//     return false
//   }
//   let next = getNext(s)
//   if (
//     next[next.length - 1] !== 0 &&
//     s.length % (s.length - next[next.length - 1]) === 0
//   ) {
//     return true
//   }
//   return false
// }

// function getNext(s) {
//   let j = 0
//   let next = []
//   next.push(j)
//   for (let i = 1; i < s.length; i++) {
//     while (j > 0 && s[i] !== s[j]) {
//       j = next[j - 1]
//     }
//     if (s[i] === s[j]) {
//       j++
//     }
//     next.push(j)
//   }
//   return next
// }

// 暴力解法
var repeatedSubstringPattern = function (s) {
  let len = s.length
  for (let i = 1; i <= len / 2; i++) {
    if (len % i === 0) {
      let sub = s.substring(0, i)
      let repeated = ""

      for (let j = 0; j < len / i; j++) {
        repeated += sub
      }
      if (repeated === s) {
        return true
      }
    }
  }
  return false
}
// @lc code=end
