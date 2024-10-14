/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  let dp = new Array(m).fill().map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      dp[i][0] = 0
      break
    } else {
      dp[i][0] = 1
    }
  }
  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] === 1) {
      dp[0][j] = 0
      break
    } else {
      dp[0][j] = 1
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      } else {
        dp[i][j] = 0
      }
    }
  }
  return dp[m - 1][n - 1]
}
// @lc code=end
