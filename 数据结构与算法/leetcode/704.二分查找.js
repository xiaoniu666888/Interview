/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {
//   let left = 0
//   let right = nums.length
//   let middle
//   while (left < right) {
//     middle = Math.floor((left + right) / 2)
//     if (nums[middle] < target) {
//       left = middle + 1
//     } else if (nums[middle] > target) {
//       right = middle
//     } else {
//       return middle
//     }
//   }
//   return -1
// }

// var search = function (nums, target) {
//   let left = 0
//   let right = nums.length - 1
//   let middle
//   while (left <= right) {
//     middle = Math.floor((left + right) / 2)
//     if (nums[middle] < target) {
//       left = middle + 1
//     } else if (nums[middle] > target) {
//       right = middle - 1
//     } else {
//       return middle
//     }
//   }
//   return -1
// }

var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let middle
  while (left <= right) {
    middle = Math.floor((left + right) / 2)
    if (nums[middle] < target) {
      left = middle + 1
    } else if (nums[middle] > target) {
      right = middle - 1
    } else {
      return middle
    }
  }
  return -1
}

// @lc code=end
