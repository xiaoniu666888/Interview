/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  // dp数组：i这个数拆了之后, 得到的最大积为dp[i]
  let dp = new Array(n + 1).fill(0)
  dp[0] = 0
  dp[1] = 0
  dp[2] = 1
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
    }
  }
  return dp[n]
}
// @lc code=end
