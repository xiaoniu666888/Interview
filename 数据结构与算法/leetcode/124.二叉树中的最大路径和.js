/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
  // 递归
  // 递归函数返回值：当前节点的最大贡献值
  // 递归函数的终止条件：当前节点为 null
  // 递归函数的递推逻辑：
  // 1. 递归计算左右子节点的最大贡献值
  // 2. 计算当前节点的最大贡献值
  // 3. 更新最大路径和
  // 4. 返回当前节点的最大贡献值
  let max = -Infinity
  // 递归函数
  const dfs = (root) => {
    // 递归终止条件
    if (root === null) {
      return 0
    }
    // 递归递推逻辑
    const left = dfs(root.left)
    const right = dfs(root.right)
    // 计算当前节点的最大贡献值
    const innerMaxSum = left + root.val + right
    // 更新最大路径和
    max = Math.max(max, innerMaxSum)
    // 返回当前节点的最大贡献值
    const outputMaxSum = root.val + Math.max(left, right)
    // 如果当前节点的最大贡献值小于 0，则返回 0
    return outputMaxSum < 0 ? 0 : outputMaxSum
  }
  dfs(root)
  return max
}
// @lc code=end
