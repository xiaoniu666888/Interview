/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let resArr = new Array(n).fill(0).map(() => new Array(n).fill(0))
  // 每次循环的位置, 两个坐标表示
  let startX = 0
  let startY = 0
  // 控制每一层填充元素个数
  let offset = 1
  let count = 1 // 填充的数字
  let loop = Math.floor(n / 2) // 循环多少次
  let mid = Math.floor(n / 2) // 矩阵的中间位置
  while (loop--) {
    let x = startX
    let y = startY
    // 上边界
    for (; y < n - offset; y++) {
      resArr[x][y] = count
      count++
    }
    // 右边界
    for (; x < n - offset; x++) {
      resArr[x][y] = count
      count++
    }
    // 下边界
    for (; y > startY; y--) {
      resArr[x][y] = count
      count++
    }
    // 左边界
    for (; x > startX; x--) {
      resArr[x][y] = count
      count++
    }
    // 更新起始位置
    startX++
    startY++
    // 更新每一层的元素个数
    offset++
  }
  if (n % 2 !== 0) {
    resArr[mid][mid] = count
  }
  return resArr
}
// @lc code=end
