/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null
  let cur = head
  while (cur) {
    // 临时保存
    let tem = cur.next
    // 反转
    cur.next = pre
    // pre前进
    pre = cur
    // cur前进
    cur = tem
  }
  // 此时pre为头节点
  return pre
}
// @lc code=end
