/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 先对原数组进行排序 从小到大
  nums.sort((a, b) => a - b)
  // 结果数组
  const resArr = []
  // 数组长度
  const len = nums.length
  // 遍历数组, 使用双指针
  for (let i = 0; i < len; i++) {
    let left = i + 1
    let right = len - 1
    // 因为数组是从小到大排列的, 如果第一个数大于0, 那么后边的数也一定大于0, 直接返回即可
    if (nums[i] > 0) {
      return resArr
    }
    // 去重操作, 一定是 第 i 项和第 i - 1 项比较, 不能和第 i + 1 项比较, 例如[-1,-1,2]
    if (nums[i] === nums[i - 1]) {
      continue
    }
    // 循环移动指针
    while (left < right) {
      let leftNum = nums[left]
      let rightNum = nums[right]
      // 三数之和
      let sum = nums[i] + leftNum + rightNum
      if (sum < 0) {
        left++
      } else if (sum > 0) {
        right--
      } else {
        // 将结果添加到数组中
        resArr.push([nums[i], leftNum, rightNum])
        // 这个时候分别对 left 和 right 去重, 一定是在得到一个结果的时候进行去重, 不能在上边去重, 否则会漏掉情况, 例如[0,0,0,0,0]
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
  return resArr
}
// @lc code=end
