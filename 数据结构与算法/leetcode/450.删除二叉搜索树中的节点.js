/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
// 递归
var deleteNode1 = function (root, key) {
  // 确定返回值和参数, 也就是root 和 key
  // 确定递归终止条件
  if (root === null) {
    return null
  }
  if (root.val === key) {
    if (!root.left && !root.right) {
      return null
    } else if (!root.left && root.right) {
      return root.right
    } else if (root.left && !root.right) {
      return root.left
    } else {
      let cur = root.right
      while (cur.left !== null) {
        cur = cur.left
      }
      cur.left = root.left
      return root.right
    }
  }
  // 单层递归逻辑
  if (key < root.val) {
    root.left = deleteNode(root.left, key)
  }
  if (key > root.val) {
    root.right = deleteNode(root.right, key)
  }
  return root
}
// 迭代
var deleteNode = function (root, key) {
  // 右子树继承的罗普基
  function deleleOneNode(target) {
    if (!target) {
      return target
    }
    if (!target.left) {
      return target.left
    }
    let cur = target.right
    while (cur.left) {
      cur = cur.left
    }
    cur.left = target.left
    return target.right
  }
  if (!root) {
    return root
  }
  let cur = root
  let pre = null
  while (cur) {
    if (cur.val === key) {
      break
    }
    pre = cur
    cur.val > key ? (cur = cur.left) : (cur = cur.right)
  }
  if (!pre) {
    return deleleOneNode(cur)
  }
  if (pre.left && pre.left.val === key) {
    pre.left = deleleOneNode(cur)
  }
  if (pre.right && pre.right.val === key) {
    pre.right = deleleOneNode(cur)
  }
  return root
}
// @lc code=end
