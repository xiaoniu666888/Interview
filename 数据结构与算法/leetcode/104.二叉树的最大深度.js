/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
// 后序遍历
var maxDepth1 = function (root) {
  // 如果根节点为空，则树的深度为0
  if (root === null) {
    return 0
  }

  // 定义一个递归函数来计算给定节点的深度
  function getHeight(node) {
    // 如果节点为空，则深度为0
    // 1. 确定递归终止条件
    if (node === null) {
      return 0
    }
    // 递归地计算左子树和右子树的深度，并返回较大的那个值加1（当前节点也算一层）
    // 2. 单个递归处理逻辑
    let leftHeight = getHeight(node.left)
    let rightHeight = getHeight(node.right)
    let maxHeight = Math.max(leftHeight, rightHeight)
    // 3. 确定返回值
    return 1 + maxHeight
  }

  // 调用getHeight函数计算根节点的深度
  return getHeight(root)
}
// 迭代法
var maxDepth2 = function (root) {
  if (root === null) {
    return 0
  }
  let count = 0
  const queue = [root]
  while (queue.length) {
    // 为什么这里要单独保存起来, 因为下边queue的长度会变化, 但是需要的是这里的长度
    let len = queue.length
    // 一层遍历完之后层数 +1
    count++
    while (len) {
      let node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      len--
    }
  }
  return count
}
// 前序遍历
var maxDepth = function (root) {
  let result = 0
  if (root === null) {
    return result
  }
  function getHeight(node, height) {
    result = Math.max(height, result)
    if (node.left === null && node.right === null) {
      return
    }
    if (node.left) {
      height++
      getHeight(node.left, height)
      height--
    }
    if (node.right) {
      height++
      getHeight(node.right, height)
      height--
    }
    return
  }
  getHeight(root, 1)
  return result
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
let root = new TreeNode(1)
let left = new TreeNode(2)
let right = new TreeNode(3)
root.left = left
root.right = right
let left1 = new TreeNode(4)
let right1 = new TreeNode(5)
left.left = left1
left.right = right1
let left2 = new TreeNode(6)
let right2 = new TreeNode(7)
right.left = left2
right.right = right2
console.log(maxDepth(root))
// @lc code=end
