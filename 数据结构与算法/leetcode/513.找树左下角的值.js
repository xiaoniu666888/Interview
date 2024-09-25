/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function (root) {
  let maxDepth = 0
  let result = null
  function traversal(node, curDepth) {
    // 终止条件
    if (node.left === null && node.right === null) {
      if (curDepth > maxDepth) {
        maxDepth = curDepth
        result = node.val
      }
    }
    if (node.left) {
      curDepth++
      traversal(node.left, curDepth)
      curDepth--
    }
    if (node.right) {
      curDepth++
      traversal(node.right, curDepth)
      curDepth--
    }
  }
  traversal(root, 1)
  return result
}

// @lc code=end
