/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) {
    return []
  }
  intervals.sort((a, b) => a[0] - b[0])
  let result = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i]
    let last = result[result.length - 1]
    if (cur[0] <= last[1]) {
      last[1] = Math.max(last[1], cur[1])
    } else {
      result.push(cur)
    }
  }
  return result
}
// @lc code=end
