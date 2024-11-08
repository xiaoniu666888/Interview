/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // dp[i]: 输入i, 有dp[i]种二叉搜索树
  let dp = new Array(n + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }
  console.log(dp)
  return dp[n]
}
numTrees(3)
// @lc code=end
