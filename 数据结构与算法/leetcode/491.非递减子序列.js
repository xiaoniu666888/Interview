/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 非递减子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let result = []
  let path = []
  function backTracking(startIndex) {
    if (path.length > 1) {
      result.push([...path])
    }
    let map = []
    for (let i = startIndex; i < nums.length; i++) {
      let bol =
        (path.length && nums[i] < path[path.length - 1]) ||
        map.includes(nums[i])
      if (bol) {
        continue
      }
      path.push(nums[i])
      map.push(nums[i])
      backTracking(i + 1)
      path.pop()
    }
  }
  backTracking(0)
  return result
}
// @lc code=end
