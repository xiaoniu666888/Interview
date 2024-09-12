/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const fourMap = new Map()
  let count = 0
  for (const n1 of nums1) {
    for (const n2 of nums2) {
      // 得到前两个数组每一项相加的结果, 并且存入Map中
      const sum = n1 + n2
      // key 为结果 value 为结果出现的次数
      fourMap.set(sum, (fourMap.get(sum) || 0) + 1)
    }
  }
  for (const n3 of nums3) {
    for (const n4 of nums4) {
      // 得到后两个数组每一项相加的结果, 然后去Map中寻找 0 - sum , 也就是去找上边存入的value, 得到的结果就是可以组成元组的个数, 再累加到count上
      const sum = n3 + n4
      count += fourMap.get(0 - sum) || 0
    }
  }
  return count
}
// @lc code=end
