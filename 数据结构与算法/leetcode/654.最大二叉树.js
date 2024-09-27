/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  let node = null
  if (nums.length === 1) {
    node = new TreeNode(nums[0])
    return node
  }
  let maxValue = 0
  let index = 0
  // 中
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxValue) {
      maxValue = nums[i]
      index = i
    }
    node = new TreeNode(maxValue)
  }
  // 左
  if (index > 0) {
    // 左闭右开区间
    let newNums = nums.slice(0, index)
    node.left = constructMaximumBinaryTree(newNums)
  }
  // 右
  if (index < nums.length - 1) {
    // 左闭右开区间
    let newNums = nums.slice(index + 1, nums.length)
    node.right = constructMaximumBinaryTree(newNums)
  }
  return node
}
// @lc code=end
