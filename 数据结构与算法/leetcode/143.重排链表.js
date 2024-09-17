/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList1 = function (head) {
  if (!head || !head.next || !head.next.next) {
    return
  }
  // 找中点
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  // slow 现在指向中间
  let secondHalfHead = slow.next
  slow.next = null
  // 反转后半部分链表
  let pre = null
  let cur = secondHalfHead
  while (cur) {
    let tem = cur.next
    cur.next = pre
    pre = cur
    cur = tem
  }
  // pre现在指向反转后的头节点
  // 合并两个链表
  let p1 = head
  let p2 = pre
  while (p1 && p2) {
    let tem1 = p1.next
    let tem2 = p2.next
    p1.next = p2
    p1 = tem1
    p2.next = p1
    p2 = tem2
  }
}

// 数组写法
var reorderList = function (head, s = [], tmp) {
  // 换行可删除，合并到4行
  while (head) {
    tmp = head.next
    head.next = null
    s.push(head)
    head = tmp
  }
  let i = 0
  let j = s.length - 1
  while (i < j) {
    s[i].next = s[j]
    if (j !== i + 1) {
      s[j].next = s[i + 1]
    }
    i++
    j--
  }
  return s[0]
}

// @lc code=end
