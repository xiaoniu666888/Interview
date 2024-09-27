/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
// 二叉搜索树  中间节点比左边大 比右边小
// 递归法
var searchBST1 = function (root, val) {
  if (root === null || val === root.val) {
    return root
  }
  if (val > root.val) {
    return searchBST(root.right, val)
  }
  if (val < root.val) {
    return searchBST(root.left, val)
  }
}
// 迭代法
var searchBST = function (root, val) {
  while (root !== null) {
    if (val < root.val) {
      root = root.left
    } else if (val > root.val) {
      root = root.right
    } else {
      return root
    }
  }
  return root
}
// @lc code=end
