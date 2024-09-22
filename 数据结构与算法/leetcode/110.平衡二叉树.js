/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
// 递归
var isBalanced = function (root) {
  function getHeight(node) {
    // 1. 确定终止条件
    if (node === null) {
      return 0
    }
    // 2. 确定单层逻辑
    let leftHeight = getHeight(node.left)
    if (leftHeight === -1) {
      return -1
    }
    let rightHeight = getHeight(node.right)
    if (rightHeight === -1) {
      return -1
    }
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1
    } else {
      return 1 + Math.max(leftHeight, rightHeight)
    }
  }
  return getHeight(root) !== -1
}
// @lc code=end
