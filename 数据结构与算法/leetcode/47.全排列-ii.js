/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let result = []
  let path = []
  nums = nums.sort((a, b) => a - b)
  function backTracking(used) {
    if (path.length === nums.length) {
      result.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      // 这里 !used[i - 1] 和 used[i - 1] 都可以通过, 因为剪枝的不一样, 一个是树层剪枝, 一个是树枝剪枝
      if (used[i] || (!used[i - 1] && nums[i] === nums[i - 1])) {
        continue
      }
      path.push(nums[i])
      used[i] = true
      backTracking(used)
      path.pop()
      used[i] = false
    }
  }
  backTracking([])
  return result
}
// @lc code=end
