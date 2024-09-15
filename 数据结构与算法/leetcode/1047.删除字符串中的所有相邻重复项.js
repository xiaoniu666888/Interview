/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 栈解法
// var removeDuplicates = function (s) {
//   const arr = []
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === arr[arr.length - 1]) {
//       arr.pop()
//     } else {
//       arr.push(s[i])
//     }
//   }
//   return arr.join("")
// }
// console.log(removeDuplicates("abbaca"))

// 双指针解法, 太nb了
var removeDuplicates = function (s) {
  s = Array.from(s)
  let top = -1 // 其实代表的是慢指针
  for (let i = 0; i < s.length; i++) {
    if (top === -1 || s[i] !== s[top]) {
      top++
      s[top] = s[i]
    } else {
      top--
    }
  }
  s.length = top + 1
  return s.join("")
}
console.log(removeDuplicates("abbaca"))
// @lc code=end
