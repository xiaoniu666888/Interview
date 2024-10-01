/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
// 递归
var insertIntoBST1 = function (root, val) {
  // 确定终止条件
  if (root === null) {
    return new TreeNode(val)
  }
  // 单层递归逻辑
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val)
  }
  if (val > root.val) {
    root.right = insertIntoBST(root.right, val)
  }
  return root
}
// 迭代
var insertIntoBST = function (root, val) {
  if (root === null) {
    return new TreeNode(val)
  }
  let cur = root
  let parent = root
  while (cur !== null) {
    parent = cur
    if (val < cur.val) {
      cur = cur.left
    } else {
      cur = cur.right
    }
  }
  if (val < parent.val) {
    parent.left = new TreeNode(val)
  } else {
    parent.right = new TreeNode(val)
  }
  return root
}
// @lc code=end
