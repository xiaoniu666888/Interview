/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 动态规划 dp[i] 表示以i为结尾的子数组的和
  const dp = new Array(nums.length).fill(0)
  // 初始化
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    // 状态转移方程
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
  }
  return Math.max(...dp)
}
// @lc code=end
