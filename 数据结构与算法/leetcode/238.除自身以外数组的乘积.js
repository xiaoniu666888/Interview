/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const length = nums.length
  const result = new Array(length).fill(1)

  // 计算前缀积
  let prefix = 1
  for (let i = 0; i < length; i++) {
    // 前缀积, 上一个循环的结果
    result[i] = prefix
    prefix *= nums[i]
  }

  // 计算后缀积并更新结果
  let suffix = 1
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= suffix
    suffix *= nums[i]
  }

  return result
}
// @lc code=end
