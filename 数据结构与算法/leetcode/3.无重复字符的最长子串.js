/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 数组
  // let arr = [],
  //   max = 0
  // for (let i = 0; i < s.length; i++) {
  //   let index = arr.indexOf(s[i])
  //   if (index !== -1) {
  //     arr.splice(0, index + 1)
  //   }
  //   arr.push(s[i])
  //   max = Math.max(arr.length, max)
  // }
  // return max

  // Map
  let map = new Map(),
    max = 0
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]) + 1, i)
    }
    max = Math.max(max, j - i + 1)
    map.set(s[j], j)
  }
  return max
}
console.log(lengthOfLongestSubstring("abcbacbb"))
// @lc code=end
