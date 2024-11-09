/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  let numOfZero
  let numOfOne
  for (const str of strs) {
    numOfZero = 0
    numOfOne = 0
    for (const s of str) {
      if (s === "0") {
        numOfZero++
      } else {
        numOfOne++
      }
    }
    for (let i = m; i >= numOfZero; i--) {
      for (let j = n; j >= numOfOne; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - numOfZero][j - numOfOne] + 1)
      }
    }
  }
  return dp[m][n]
}
console.log(findMaxForm(["10", "0", "1"], 1, 1))
// @lc code=end
