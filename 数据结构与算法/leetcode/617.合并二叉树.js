/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// 直接使用原来的二叉树
var mergeTrees1 = function (root1, root2) {
  if (root1 === null) {
    return root2
  }
  if (root2 === null) {
    return root1
  }
  // 中
  root1.val += root2.val
  // 左
  root1.left = mergeTrees(root1.left, root2.left)
  // 右
  root1.right = mergeTrees(root1.right, root2.right)
  return root1
}
// 定义新二叉树
var mergeTrees = function (root1, root2) {
  if (root1 === null) {
    return root2
  }
  if (root2 === null) {
    return root1
  }
  let newNode = new TreeNode(0)
  newNode.val = root1.val + root2.val
  newNode.left = mergeTrees(root1.left, root2.left)
  newNode.right = mergeTrees(root1.right, root2.right)
  return newNode
}
// @lc code=end
