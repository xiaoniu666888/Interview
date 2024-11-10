/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  // dp[j] 表示装满容量为j的背包有dp[j]种方法
  let dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  // 遍历物品
  for (let i = 0; i < coins.length; i++) {
    // 遍历背包
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]]
    }
  }
  return dp[amount]
}
// @lc code=end
