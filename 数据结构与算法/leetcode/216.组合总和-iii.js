/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = []
  let path = []
  function backTracking(startIndex) {
    let sum = 0
    if (path.length) {
      sum = path.reduce((a, b) => a + b)
      // 剪枝
      if (sum > n) {
        return
      }
    }
    if (path.length === k && sum == n) {
      result.push([...path])
      return
    }
    // 9 - (k - path.length) + 1 也是剪枝
    for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
      path.push(i)
      backTracking(i + 1)
      path.pop()
    }
  }
  backTracking(1)
  return result
}
// @lc code=end
