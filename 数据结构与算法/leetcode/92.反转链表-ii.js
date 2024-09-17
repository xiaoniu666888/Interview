/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(-1, head)
  let count1 = 0
  let count2 = 0
  let start = dummy
  let end = dummy
  while (start && count1 < left - 1) {
    start = start.next
    count1++
  }
  while (end && count2 < right) {
    end = end.next
    count2++
  }
  let leftNode = start.next
  let rgihtNode = end.next
  start.next = null
  end.next = null
  reverseList(leftNode)
  start.next = end
  leftNode.next = rgihtNode
  return dummy.next
}

function reverseList(head) {
  let pre = null
  let cur = head
  while (cur) {
    let tem = cur.next
    cur.next = pre
    pre = cur
    cur = tem
  }
  return pre
}
// @lc code=end
