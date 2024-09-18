/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal1 = function (root) {
  //   let res = []
  //   const dfs = function (root) {
  //     if (root === null) {
  //       return
  //     }
  //     res.push(root.val)
  //     dfs(root.left)
  //     dfs(root.right)
  //   }
  //   dfs(root)
  //   return res

  // 写法二
  return root
    ? [
        // 前序遍历：中左右
        root.val,
        // 递归左子树
        ...preorderTraversal(root.left),
        // 递归右子树
        ...preorderTraversal(root.right)
      ]
    : []
}
// 非递归写法
var preorderTraversal2 = function (root) {
  let res = []
  let stack = [root]
  while (stack.length) {
    let node = stack.pop()
    if (node) {
      res.push(node.val)
      if (node.right) {
        stack.push(node.right)
      }
      if (node.left) {
        stack.push(node.left)
      }
    }
  }
  return res
}

// 通过迭代写法
var preorderTraversal = function (root) {
  let res = []
  let stack = []
  if (root) stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    if (!node) {
      res.push(stack.pop().val)
      continue
    }
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
    stack.push(node)
    stack.push(null)
  }
  return res
}
// @lc code=end
