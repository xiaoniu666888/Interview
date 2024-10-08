/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let len = nums.length
  if (len <= 1) {
    return len
  }
  let set = new Set(nums)
  let res = 0
  for (let n of set) {
    if (!set.has(n - 1)) {
      let m = n
      while (set.has(m + 1)) {
        m++
      }
      res = Math.max(res, m - n + 1)
      if (res > Math.floor(len / 2)) {
        break
      }
    }
  }
  return res
}
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
// @lc code=end
