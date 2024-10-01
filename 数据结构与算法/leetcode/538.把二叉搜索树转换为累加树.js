/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
var convertBST1 = function (root) {
  let pre = 0
  function traversal(cur) {
    if (!cur) {
      return
    }
    // 右
    traversal(cur.right)
    // 中
    cur.val += pre
    pre = cur.val
    traversal(cur.left)
  }
  traversal(root)
  return root
}
// 迭代
var convertBST = function (root) {
  let stack = []
  let pre = 0
  let cur = root
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur)
      cur = cur.right
    }
    cur = stack.pop()
    cur.val += pre
    pre = cur.val
    cur = cur.left
  }
  return root
}
// @lc code=end
