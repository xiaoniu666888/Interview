/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  const dp = new Array(1501).fill(0)
  const sum = stones.reduce((a, b) => a + b)
  let target = Math.floor(sum / 2)
  for (let i = 0; i < stones.length; i++) {
    for (let j = target; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
      console.log(dp[j])
    }
  }
  return sum - dp[target] - dp[target]
}
console.log(lastStoneWeightII([2, 7, 4, 1, 8, 1]))
// @lc code=end
