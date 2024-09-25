/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false
  }
  function traversal(cur, count) {
    // 递归终止的条件
    if (!cur.left && !cur.right && count === 0) {
      return true
    }
    if (!cur.left && !cur.right && count !== 0) {
      return false
    }
    // 单层递归的逻辑
    if (cur.left) {
      count -= cur.left.val
      if (traversal(cur.left, count)) {
        return true
      }
      count += cur.left.val
    }
    if (cur.right) {
      count -= cur.right.val
      if (traversal(cur.right, count)) {
        return true
      }
      count += cur.right.val
    }
    return false
  }
  return traversal(root, targetSum - root.val)
}
// @lc code=end
