/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 哈希表
var firstMissingPositive = function (nums) {
  // 创建一个哈希表来存储数组中出现的正数
  const numSet = new Set()

  // 遍历数组，将所有出现的正数添加到哈希表中
  for (let num of nums) {
    if (num > 0 && num <= nums.length) {
      numSet.add(num)
    }
  }

  // 从1开始查找第一个不在哈希表中的正数
  for (let i = 1; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      return i
    }
  }

  // 如果数组中包含1到nums.length的所有正数，则返回nums.length + 1
  return nums.length + 1
}
// @lc code=end
