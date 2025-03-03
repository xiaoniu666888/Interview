/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // 深度优先遍历
  // 遍历二维数组，遇到1，就把1周围的1都置为0，然后count++
  // 遍历完二维数组，返回count
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++
        dfs(grid, i, j)
      }
    }
  }
  return count
}
function dfs(grid, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[i].length ||
    grid[i][j] === "0"
  ) {
    return
  }
  grid[i][j] = "0"
  dfs(grid, i - 1, j)
  dfs(grid, i + 1, j)
  dfs(grid, i, j - 1)
  dfs(grid, i, j + 1)
}
// @lc code=end
