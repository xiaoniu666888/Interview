/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = []
  let queue = [root]
  if (root === null) {
    return res
  }
  while (queue.length !== 0) {
    let curVal = []
    // 这里很重要, 一定要保存起来, 因为queue.length 在下边是会变化的
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let cur = queue.shift()
      curVal.push(cur.val)
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
    res.push(curVal)
  }
  return res
}
// @lc code=end
