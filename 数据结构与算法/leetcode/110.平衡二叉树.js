/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
// 递归
var isBalanced1 = function (root) {
  function getHeight(node) {
    // 1. 确定终止条件
    if (node === null) {
      return 0
    }
    // 2. 确定单层逻辑
    let leftHeight = getHeight(node.left)
    if (leftHeight === -1) {
      return -1
    }
    let rightHeight = getHeight(node.right)
    if (rightHeight === -1) {
      return -1
    }
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1
    } else {
      return 1 + Math.max(leftHeight, rightHeight)
    }
  }
  return getHeight(root) !== -1
}
// 迭代
var isBalanced = function (root) {
  if (root === null) {
    return true
  }
  let queue = [root]
  while (queue.length) {
    let node = queue[queue.length - 1]
    queue.pop()
    if (Math.abs(getHeight(node.left) - getHeight(node.right)) > 1) {
      return false
    }
    node.right && queue.push(node.right)
    node.left && queue.push(node.left)
  }
  return true
}
var getHeight = function (curNode) {
  let queue = []
  if (curNode !== null) {
    queue.push(curNode)
  }
  let depth = 0
  let res = 0
  while (queue.length) {
    let node = queue[queue.length - 1]
    if (node !== null) {
      queue.pop()
      queue.push(node) // 中
      queue.push(null)
      depth++
      node.right && queue.push(node.right) // 右
      node.left && queue.push(node.left) // 左
    } else {
      queue.pop()
      node = queue[queue.length - 1]
      queue.pop()
      depth--
    }
    res = res > depth ? res : depth
  }
  return res
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
const left = new TreeNode(2)
root.left = left
const right = new TreeNode(2)
root.right = right
const left1 = new TreeNode(3)
left.left = left1
const right1 = new TreeNode(3)
left.right = right1

const left2 = new TreeNode(4)
left1.left = left2
const right2 = new TreeNode(4)
left1.right = right2
console.log(root)
console.log(isBalanced1(root))
// @lc code=end
