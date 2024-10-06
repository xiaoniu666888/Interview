/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let result = []
  let chessboard = new Array(n).fill(0).map(() => new Array(n).fill("."))

  function backTracking(row) {
    if (row === n) {
      result.push(chessboard.map((row) => row.join("")))
      return
    }
    for (let col = 0; col < n; col++) {
      if (isValid(chessboard, n, row, col)) {
        // 如果位置有效
        chessboard[row][col] = "Q" // 放置皇后
        backTracking(row + 1) // 继续下一个行
        chessboard[row][col] = "." // 回溯，撤销选择
      }
    }
  }

  function isValid(matrix, n, row, col) {
    // 检查列是否有冲突
    for (let i = 0; i < row; i++) {
      if (matrix[i][col] === "Q") {
        return false
      }
    }
    // 检查左上方对角线是否有冲突
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (matrix[i][j] === "Q") {
        return false
      }
    }
    // 检查右上方对角线是否有冲突
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (matrix[i][j] === "Q") {
        return false
      }
    }
    return true
  }

  backTracking(0)
  return result
}
// @lc code=end
