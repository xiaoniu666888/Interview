/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const stack = []
  let sum = 0
  for (let i = 0; i < height.length; i++) {
    // 栈顶元素小于当前元素，则入栈
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      // 栈顶元素出栈，计算雨水面积
      const top = stack.pop()
      //   如果栈为空，则跳出循环
      if (stack.length === 0) break
      //   左边界为栈顶元素
      const left = stack[stack.length - 1]
      //   宽度为当前元素和左边界之间的距离
      const w = i - left - 1
      //   高度为当前元素和左边界中较小的那个值
      const minHeight = Math.min(height[left], height[i])
      const h = minHeight - height[top]
      //   宽度乘以高度，就是当前元素能接的雨水面积
      sum += w * h
    }
    stack.push(i)
  }
  return sum
}
console.log(trap([4, 2, 0, 3, 2, 5]))
// @lc code=end
