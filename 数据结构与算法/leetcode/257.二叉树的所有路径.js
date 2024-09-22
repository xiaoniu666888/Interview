/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
// 递归
var binaryTreePaths1 = function (root) {
  let res = []
  // 1. 确定递归函数参数
  function getPath(node, curPath) {
    // 2. 确定递归终止条件, 到叶子节点停止
    if (node.left === null && node.right === null) {
      curPath += node.val
      res.push(curPath)
      return
    }
    // 3. 确定单层递归逻辑
    curPath += node.val + "->"
    node.left && getPath(node.left, curPath)
    node.right && getPath(node.right, curPath)
  }
  getPath(root, "")
  return res
}
// 迭代
var binaryTreePaths = function (root) {
  if (!root) {
    return []
  }
  const stack = [root]
  const paths = [""]
  const res = []
  while (stack.length) {
    const node = stack.pop()
    let path = paths.pop()
    if (!node.left && !node.right) {
      // 到叶子节点终止, 添加路径到结果中
      res.push(path + node.val)
      continue
    }
    path += node.val + "->"
    if (node.right) {
      stack.push(node.right)
      paths.push(path)
    }
    if (node.left) {
      stack.push(node.left)
      paths.push(path)
    }
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
const right = new TreeNode(3)
const leftChild = new TreeNode(5)
root.left = left
root.right = right
left.left = leftChild
console.log(binaryTreePaths(root))
// @lc code=end
