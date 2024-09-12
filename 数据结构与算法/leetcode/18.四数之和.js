/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const len = nums.length
  if (len < 4) return []
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < len - 3; i++) {
    // 去重i
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < len - 2; j++) {
      // 去重j
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      let left = j + 1
      let right = len - 1
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum < target) {
          left++
          continue
        }
        if (sum > target) {
          right--
          continue
        }
        res.push([nums[i], nums[j], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }
        left++
        right--
      }
    }
  }
  return res
}

// @lc code=end
