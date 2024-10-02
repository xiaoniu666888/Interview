/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0
  let right = nums.length - 1
  let mid
  // [left,right)
  while (left < right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else if (nums[mid] < nums[right]) {
      right = mid
    }
  }
  return nums[left]
}
// @lc code=end
