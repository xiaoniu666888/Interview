/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!postorder.length) {
    return null
  }
  let rootValue = postorder.pop()
  let root = new TreeNode(rootValue)
  // 数组长度为1 说明是叶子节点
  //   if (postorder.length === 1) {
  //     return root
  //   }
  // 找到切割点
  let delimiterIndex = inorder.indexOf(rootValue)
  // 切割中序数组 得到中序左数组和中序右数组
  let midLeftArr = inorder.slice(0, delimiterIndex)
  let midRightArr = inorder.slice(delimiterIndex + 1)

  // 切割后序数组 得到后序左数组和后序右数组
  let postLeftArr = postorder.slice(0, midLeftArr.length)
  let postRightArr = postorder.slice(midLeftArr.length)
  root.left = buildTree(midLeftArr, postLeftArr)
  root.right = buildTree(midRightArr, postRightArr)
  return root
}
// @lc code=end
