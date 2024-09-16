/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 用一个队列保存遍历过的索引
  let queue = []
  let res = []
  for (let i = 0; i < nums.length; i++) {
    // 保持队列的单调性, 移除所有小于当前元素的元素
    while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop()
    }
    queue.push(i)
    if (i >= k - 1) {
      // 保证队列中的元素始终对应于当前窗口内的元素
      if (queue.length && queue[0] <= i - k) {
        queue.shift()
      }
      res.push(nums[queue[0]])
    }
  }

  return res
}
console.log(maxSlidingWindow([[1, -1]], 1))
// @lc code=end
