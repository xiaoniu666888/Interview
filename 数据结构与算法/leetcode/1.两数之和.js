/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 哈希表
// var twoSum = function (nums, target) {
//   // 哈希表, key是nums中的值, value是索引
//   let hash = {}
//   for (let i = 0; i < nums.length; i++) {
//     // 如果找到就可以直接返回, 比如nums = [2,7,11,15], target = 9
//     // 第一项2会被加到数组, 那么在遍历第二项7的时候, 就会找到第一项, 那么这个时候直接返回就行
//     if (hash[target - nums[i]] !== undefined) {
//       return [hash[target - nums[i]], i]
//     }
//     // 如果不是上边的情况, 那么添加到哈希表中
//     hash[nums[i]] = i
//   }
//   return [] // 没有匹配到就返回空数组
// }

// for循环
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}
// @lc code=end
