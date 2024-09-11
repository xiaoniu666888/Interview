/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 定义虚拟头节点
  let dummy = new ListNode(0, head)
  let fast = dummy
  let slow = dummy
  // fast 先走 n+1 步
  for (let i = 0; i <= n; i++) {
    fast = fast.next
  }
  // fast 和 slow 一起走, 走到最后slow的next就是要删除的节点
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
}
// @lc code=end
