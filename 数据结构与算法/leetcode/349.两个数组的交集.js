/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function (nums1, nums2) {
//   let resArr = nums1.filter((i) => nums2.includes(i))
//   return [...new Set(resArr)]
// }
var intersection = function (nums1, nums2) {
  let resSet = new Set()
  let nums1Set = new Set(nums1)
  for (let i of nums2) {
    if (nums1Set.has(i)) {
      resSet.add(i)
    }
  }
  return [...new Set(resSet)]
}
// @lc code=end
