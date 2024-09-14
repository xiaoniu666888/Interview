/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const len = s.length
  const arr = Array.from(s)
  const reg = /^[a-zA-Z]+$/
  let left = 0
  let right = len - 1
  while (left < right) {
    if (reg.test(arr[left]) && reg.test(arr[right])) {
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    } else if (!reg.test(arr[left]) && reg.test(arr[right])) {
      left++
    } else if (reg.test(arr[left]) && !reg.test(arr[right])) {
      right--
    } else {
      left++
      right--
    }
  }
  return arr.join("")
}
// @lc code=end
