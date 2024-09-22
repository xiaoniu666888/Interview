/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 迭代
var sumOfLeftLeaves1 = function (root) {
  if (!root) {
    return 0
  }
  let queue = [root]
  let sum = 0
  while (queue.length) {
    let len = queue.length
    while (len--) {
      let cur = queue.shift()
      if (cur.left && cur.left.left === null && cur.left.right === null) {
        sum += cur.left.val
      }
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
  }
  return sum
}
// 递归
var sumOfLeftLeaves = function (root) {
  let sum = 0
  if (root === null) {
    return 0
  }
  if (root.left === null && root.right === null) {
    return 0
  }
  let leftSum = sumOfLeftLeaves(root.left) // 左
  if (
    root.left !== null &&
    root.left.left === null &&
    root.left.right === null
  ) {
    leftSum = root.left.val
  }
  let rightSum = sumOfLeftLeaves(root.right)
  sum = leftSum + rightSum
  return sum
}
// @lc code=end
