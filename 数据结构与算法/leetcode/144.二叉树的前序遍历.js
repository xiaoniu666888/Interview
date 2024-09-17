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
var preorderTraversal = function (root) {
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
// @lc code=end
