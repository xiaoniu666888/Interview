/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let k = nums.length - 1
  let i = 0
  let j = nums.length - 1
  let resArr = Array(nums.length).fill(0)
  while (i <= j) {
    // 右边大
    if (nums[i] * nums[i] < nums[j] * nums[j]) {
      resArr[k] = nums[j] * nums[j]
      k--
      j--
    } else {
      // 左边大 或者 相等
      resArr[k] = nums[i] * nums[i]
      k--
      i++
    }
  }
  return resArr
}
// @lc code=end
