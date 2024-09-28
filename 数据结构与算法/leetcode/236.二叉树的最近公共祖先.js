/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  function postorder(node, p, q) {
    if (node === null) {
      return node
    }
    if (node === p || node === q) {
      return node
    }
    // 左
    let left = postorder(node.left, p, q)
    // 右
    let right = postorder(node.right, p, q)
    // 左右返回都不为空, 说明这个节点就是公共节点
    if (left && right) {
      return node
    } else if (left && !right) {
      // 左边返回为空, 右边返回不为空
      return left
    } else if (!left && right) {
      // 右边返回为空, 左边返回不为空
      return right
    } else {
      return null // 两边都为空, 直接返回null, 说明这个不是公共节点
    }
  }
  return postorder(root, p, q)
}
// @lc code=end
