/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
// 数组 中序遍历
var isValidBST1 = function (root) {
  let res = []
  function buildArr(root) {
    if (root) {
      buildArr(root.left)
      res.push(root.val)
      buildArr(root.right)
    }
  }
  buildArr(root)
  for (let i = 0; i < res.length - 1; i++) {
    if (res[i] >= res[i + 1]) {
      return false
    }
  }
  return true
}
// 递归法
var isValidBST = function (root) {
  let pre = null
  function inOrder(root) {
    if (root === null) {
      return true
    }
    // 左
    let left = inOrder(root.left)
    // 中
    if (pre !== null && pre.val >= root.val) {
      return false
    }
    pre = root
    // 右
    let right = inOrder(root.right)
    return left && right
  }
  return inOrder(root)
}
// @lc code=end
