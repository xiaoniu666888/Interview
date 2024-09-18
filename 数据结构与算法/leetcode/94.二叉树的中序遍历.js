/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
// 递归
var inorderTraversal1 = function (root) {
  const res = []
  function dfs(root) {
    if (root === null) {
      return
    }
    dfs(root.left)
    res.push(root.val)
    dfs(root.right)
  }
  dfs(root)
  return res
}

var inorderTraversal2 = function (root) {
  let stack = []
  let arr = []
  let cur = root
  while (cur !== null || stack.length) {
    if (cur !== null) {
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack.pop()
      arr.push(cur.val)
      cur = cur.right
    }
  }
  return arr
}

// 统一迭代方式
var inorderTraversal = function (root) {
  let stack = []
  let res = []
  if (root) stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    // 哪个节点的后一个节点是null  证明这个节点一已经处理完了
    if (!node) {
      res.push(stack.pop().val)
      continue
    }
    if (node.right) {
      stack.push(node.right) // 右
    }
    stack.push(node) // 中
    // 这里做一个标记, 说明node节点已经被处理过了
    stack.push(null)
    if (node.left) {
      stack.push(node.left) // 左
    }
  }
  return res
}
// @lc code=end
