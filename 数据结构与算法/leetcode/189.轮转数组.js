/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length

  // 反转整个数组
  reverse(nums, 0, nums.length - 1)
  // 反转前 k 个元素
  reverse(nums, 0, k - 1)
  // 反转剩余的 n-k 个元素
  reverse(nums, k, nums.length - 1)
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    // ;[arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
}
// @lc code=end
