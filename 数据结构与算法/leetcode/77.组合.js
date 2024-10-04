/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = []
  let path = []
  function backTracking(n, k, startIndex) {
    // 确定终止条件
    if (path.length === k) {
      result.push([...path])
      return
    }
    // 单层递归逻辑
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i)
      backTracking(n, k, i + 1)
      path.pop()
    }
  }
  backTracking(n, k, 1)
  return result
}
// @lc code=end
