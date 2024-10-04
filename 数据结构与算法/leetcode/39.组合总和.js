/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = []
  let path = []
  function backTracking(startIndex) {
    let sum = 0
    if (path.length) {
      sum = path.reduce((a, b) => a + b)
      console.log(sum)
      if (sum > target) {
        return
      }
      if (sum === target) {
        result.push([...path])
        return
      }
    }
    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i])
      backTracking(i)
      path.pop()
    }
  }
  backTracking(0)
  return result
}
combinationSum([2, 3, 6, 7], 7)
// @lc code=end
