/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let start = 0 // 开始位置指针
  let end = 0 // 结束位置指针
  let result = Infinity // 最终结果初始化为最大值
  let sum = 0
  while (end < nums.length) {
    sum += nums[end]
    while (sum >= target) {
      result = Math.min(result, end - start + 1)
      sum -= nums[start]
      start++
    }
    end++
  }
  return result === Infinity ? 0 : result
}
// @lc code=end
