/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
// 递归
var trimBST1 = function (root, low, high) {
  // 终止条件
  if (root === null) {
    return null
  }
  if (root.val < low) {
    return trimBST(root.right, low, high)
  }
  if (root.val > high) {
    return trimBST(root.left, low, high)
  }
  // 单层递归逻辑
  root.left = trimBST(root.left, low, high)
  root.right = trimBST(root.right, low, high)
  return root
}
// 迭代
var trimBST = function (root, low, high) {
  if (root === null) {
    return null
  }
  // root根节点
  while (root && (root.val < low || root.val > high)) {
    if (root.val < low) {
      root = root.right
    } else {
      root = root.left
    }
  }
  // 左子树
  let cur = root
  while (cur) {
    while (cur.left && cur.left.val < low) {
      cur.left = cur.left.right
    }
    cur = cur.left
  }
  // 右子树
  cur = root
  while (cur) {
    while (cur.right && cur.right.val > high) {
      cur.right = cur.right.left
    }
    cur = cur.right
  }
  return root
}
// @lc code=end
