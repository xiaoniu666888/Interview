/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let res = []
  let left = 0
  let right = n - 1
  let top = 0
  let bottom = m - 1
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    top++
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
    right--
    if (left <= right && top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i])
      }
      bottom--
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left])
      }
      left++
    }
  }
  return res
}
// @lc code=end
