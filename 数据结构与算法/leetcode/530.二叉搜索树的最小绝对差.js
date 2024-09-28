/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference1 = function (root) {
  let pre = null
  let result = Infinity
  function inorder(node) {
    if (!node) {
      return
    }
    inorder(node.left)
    if (pre) {
      result = Math.min(result, Math.abs(node.val - pre.val))
    }
    pre = node
    inorder(node.right)
  }
  inorder(root)
  return result
}
// 迭代
var getMinimumDifference = function (root) {
  let result = []
  function inorder(root) {
    if (!root) {
      return
    }
    inorder(root.left)
    result.push(root.val)
    inorder(root.right)
  }
  inorder(root)

  let res = Infinity
  for (let i = 0; i < result.length - 1; i++) {
    res = Math.min(res, Math.abs(result[i] - result[i + 1]))
  }
  return res
}
// @lc code=end
