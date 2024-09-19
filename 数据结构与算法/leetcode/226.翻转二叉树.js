/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
// 递归
var invertTree = function (root) {
  // 确定终止条件
  if (root === null) {
    return root
  }
  //  处理逻辑, 交换两个子节点
  ;[root.left, root.right] = [root.right, root.left]
  invertTree(root.left)
  invertTree(root.right)
  // 返回值 root
  return root
}
// @lc code=end
