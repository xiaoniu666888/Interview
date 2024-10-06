/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = []
  let path = []
  function backTracking(startIndex) {
    result.push([...path])
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i])
      backTracking(i + 1)
      path.pop()
    }
  }
  backTracking(0)
  return result
}
// @lc code=end
