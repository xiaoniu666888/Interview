/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = []
  let path = []
  function backTracking(startIndex) {
    if (startIndex >= s.length) {
      result.push(Array.from(path))
      return
    }
    for (let i = startIndex; i < s.length; i++) {
      if (!isPalindrome(s, startIndex, i)) {
        continue
      }
      path.push(s.slice(startIndex, i + 1))
      console.log(startIndex, i + 1)
      backTracking(i + 1)
      path.pop()
    }
  }
  backTracking(0)
  return result
}
function isPalindrome(s, start, end) {
  for (let i = start, j = end; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false
    }
  }
  return true
}
partition("aab")
// @lc code=end
