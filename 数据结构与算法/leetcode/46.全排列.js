/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = []
  let path = []
  let used = new Set()
  function backTracking() {
    if (path.length === nums.length) {
      result.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used.has(nums[i])) {
        continue
      }
      path.push(nums[i])
      used.add(nums[i])
      backTracking()
      path.pop()
      used.delete(nums[i])
    }
  }
  backTracking()
  return result
}
let nums = [1, 1, 2]
console.log(permute(nums))
// @lc code=end
