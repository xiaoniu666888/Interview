/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b)
  if (sum % 2 === 1) return false
  const target = sum / 2
  const dp = new Array(target + 1).fill(0)
  // dp[j]的含义: 容量为j的背包能装的最大物品价值为dp[j]
  // 遍历物品
  for (let i = 0; i < nums.length; i++) {
    // 遍历背包
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
      console.log(dp[j])
    }
  }
  console.log(dp)
  return dp[target] === target
}
canPartition([1, 5, 11, 5])
// @lc code=end
