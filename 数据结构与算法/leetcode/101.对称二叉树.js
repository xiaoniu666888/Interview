/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
// 递归解法
var isSymmetric1 = function (root) {
  // 1. 确定递归参数
  function compareNode(left, right) {
    // 2. 确定终止情况
    if (left === null && right !== null) {
      return false
    } else if (left !== null && right === null) {
      return false
    } else if (left === null && right === null) {
      return true
    } else if (left.val !== right.val) {
      return false
    }
    // 当左右节点都不为空且值相等的时候, 要接着向下遍历
    // 3. 确定单层逻辑
    let outside = compareNode(left.left, right.right)
    let inside = compareNode(left.right, right.left)
    let isSame = outside && inside
    return isSame
  }
  if (root === null) {
    return true
  }
  return compareNode(root.left, root.right)
}
// 栈解法
var isSymmetric = function (root) {
  if (root === null) {
    return
  }
  let queue = []
  queue.push(root.left)
  queue.push(root.right)
  while (queue.length) {
    let leftNode = queue.shift()
    let rightNode = queue.shift()
    if (leftNode === null && rightNode === null) {
      continue
    }
    if (
      leftNode === null ||
      rightNode === null ||
      leftNode.val !== rightNode.val
    ) {
      return false
    }
    queue.push(leftNode.left) // 左节点的左孩子
    queue.push(rightNode.right) // 右节点的右孩子
    queue.push(leftNode.right) // 左节点的右孩子
    queue.push(rightNode.left) // 右节点的左孩子
  }
  // 以上情况都遍历完, 说明为对称子树
  return true
}
// @lc code=end
