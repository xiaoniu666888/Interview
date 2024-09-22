/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
// 1. 后序遍历
var countNodes1 = function (root) {
  if (!root) {
    return 0
  }
  let res = []
  function dfs(node) {
    // 1. 确定递归终止条件
    if (node === null) {
      return
    }
    // 2. 单层逻辑
    dfs(node.left) // 左
    dfs(node.right) // 右
    res.push(node.val) // 中
  }
  dfs(root)
  return res.length
}
// 2. 利用完全二叉树的特性
var countNodes2 = function (root) {
  function getNums(node) {
    // 1. 递归终止条件
    if (node === null) {
      return 0
    }
    let left = node.left
    let right = node.right
    let leftDep = 1
    let rightDep = 1
    while (left) {
      left = left.left
      leftDep++
    }
    while (right) {
      right = right.right
      rightDep++
    }
    if (leftDep === rightDep) {
      return 2 ** leftDep - 1
    }
    // 2. 单层逻辑
    let leftNum = getNums(node.left) // 左
    let rightNum = getNums(node.right) // 右
    let result = leftNum + rightNum + 1 // 中
    return result
  }
  return getNums(root)
}
// 3. 迭代
var countNodes = function (root) {
  if (!root) {
    return 0
  }
  let queue = [root]
  let count = 0
  while (queue.length) {
    let len = queue.length
    // 如果count在这里++, 这个时候遍历的是节点数, 不要搞混了
    // count++
    while (len--) {
      let node = queue.shift()
      // 这里是节点数
      count++
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return count
}
// @lc code=end
