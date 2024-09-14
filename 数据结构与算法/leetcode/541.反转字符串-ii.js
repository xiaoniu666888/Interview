/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let len = s.length
  let resArr = s.split("")
  for (let i = 0; i < len; i += 2 * k) {
    let left = i
    let right = i + k - 1 >= len ? len - 1 : i + k - 1
    while (left < right) {
      ;[resArr[left], resArr[right]] = [resArr[right], [resArr[left]]]
      left++
      right--
    }
  }
  return resArr.join("")
}
// @lc code=end
