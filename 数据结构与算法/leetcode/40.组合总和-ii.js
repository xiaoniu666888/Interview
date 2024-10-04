/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = []
  let path = []
  // 排序以便于去重
  candidates = candidates.sort((a, b) => a - b)
  function backTracking(startIndex) {
    let sum = 0
    if (path.length) {
      sum = path.reduce((a, b) => a + b)
      if (sum > target) {
        return
      }
      if (sum === target) {
        result.push([...path])
        return
      }
    }
    for (let i = startIndex; i < candidates.length; i++) {
      // 这里进行去重
      if (i != startIndex && candidates[i] === candidates[i - 1]) {
        continue
      }
      path.push(candidates[i])
      backTracking(i + 1)
      path.pop()
    }
  }
  backTracking(0)
  return result
}
// @lc code=end
