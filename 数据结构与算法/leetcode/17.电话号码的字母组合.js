/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
  let result = []
  let s = []
  if (!digits.length) {
    return []
  }
  if (digits.length === 1) {
    return map[digits].split("")
  }
  function backTracking(digits, index) {
    // 终止条件
    if (s.length === digits.length) {
      result.push(s.join(""))
      return
    }
    // 拿到数字
    let digit = +digits[index]
    // 拿到数字对应的字母组合
    let letter = map[digit]
    // 单层递归逻辑
    for (let i = 0; i < letter.length; i++) {
      s.push(letter[i])
      backTracking(digits, index + 1)
      s.pop()
    }
  }
  backTracking(digits, 0)
  return result
}
// @lc code=end
