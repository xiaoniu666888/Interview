/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
// 普通方法来做 也就是当作普通二叉树来做
var findMode1 = function (root) {
  let hash = new Map()
  let maxCount = 0
  let modes = []
  function inorder(node) {
    if (node === null) {
      return
    }
    inorder(node.left)
    // 更新次数
    let count = (hash.get(node.val) || 0) + 1
    hash.set(node.val, count)
    // 取最大值
    if (count > maxCount) {
      maxCount = count
      // 这个时候要重置众数列表
      modes = [node.val]
    } else if (count === maxCount) {
      // 有多个众数的情况
      modes.push(node.val)
    }
    inorder(node.right)
  }
  inorder(root)
  return modes
}
// 双指针
var findMode = function (root) {
  let pre = null
  let count = 0
  let maxCount = 0
  let res = []
  function inorder(node) {
    if (node === null) {
      return
    }
    // 左
    inorder(node.left)
    // 中
    if (pre === null) {
      count = 1
    } else if (pre.val === node.val) {
      count++
    } else {
      count = 1
    }
    pre = node
    // 次数相同
    if (count === maxCount) {
      res.push(node.val)
    }
    // 更新众数
    if (count > maxCount) {
      maxCount = count
      res = [node.val]
    }
    // 右
    inorder(node.right)
  }
  inorder(root)
  return res
}

// @lc code=end
