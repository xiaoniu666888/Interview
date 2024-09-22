/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
// 递归
var minDepth1 = function (root) {
  if (root === null) {
    return 0
  }
  if (!root.left && !root.right) {
    return 1
  }
  function getHeight(node) {
    //1. 确定终止条件
    if (node === null) {
      return 0
    }
    // 单层循环逻辑
    let leftHeight = getHeight(node.left)
    let rightHeight = getHeight(node.right)
    if (node.left === null && node.right !== null) {
      return 1 + rightHeight
    }
    if (node.left !== null && node.right === null) {
      return 1 + leftHeight
    }
    let result = 1 + Math.min(leftHeight, rightHeight)
    return result
  }
  let height = getHeight(root)
  return height
}
// 迭代
var minDepth = function (root) {
  if (!root) {
    return 0
  }
  let queue = [root]
  let dep = 0
  while (queue.length) {
    let len = queue.length
    dep++
    while (len) {
      const node = queue.shift()
      // 到第一个子节点, 返回当前深度
      if (!node.left && !node.right) {
        return dep
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      len--
    }
  }
}
// @lc code=end
