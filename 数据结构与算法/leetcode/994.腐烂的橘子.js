/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length
  const k = grid[0].length
  const queue = []
  let freshOranges = 0
  let mintues = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < k; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j])
      } else if (grid[i][j] === 1) {
        freshOranges++
      }
    }
  }
  // 上下左右
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]
  while (queue.length > 0 && freshOranges > 0) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift()
      for (const [dx, dy] of directions) {
        const newX = x + dx
        const newY = y + dy
        if (
          newX >= 0 &&
          newX < m &&
          newY >= 0 &&
          newY < k &&
          grid[newX][newY] === 1
        ) {
          grid[newX][newY] = 2
          queue.push([newX, newY])
          freshOranges--
        }
      }
    }
    mintues++
  }
  return freshOranges === 0 ? mintues : -1
}
// @lc code=end
