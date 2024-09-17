/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let res = []
  function dfs(root) {
    if (root === null) {
      return
    }
    dfs(root.left)
    dfs(root.right)
    res.push(root.val)
  }
  dfs(root)
  return res
}

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}
const root = new TreeNode(1)
const left = new TreeNode(2)
const right = new TreeNode(3)
root.left = left
root.right = right

console.log(postorderTraversal(root))
// @lc code=end
