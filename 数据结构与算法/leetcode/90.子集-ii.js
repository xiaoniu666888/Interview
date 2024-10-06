/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let result = []
  let path = []
  // 排序！！！！！
  nums = nums.sort((a, b) => a - b)
  function backTracking(startIndex) {
    result.push([...path])
    if (startIndex >= nums.length) {
      return
    }
    for (let i = startIndex; i < nums.length; i++) {
      if (i !== startIndex && nums[i] === nums[i - 1]) {
        continue
      }
      path.push(nums[i])
      backTracking(i + 1)
      path.pop()
    }
  }
  backTracking(0)
  return result
}
// @lc code=end
