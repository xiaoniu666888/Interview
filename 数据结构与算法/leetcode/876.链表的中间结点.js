/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
var middleNode1 = function (head) {
  //   let fast = head
  //   let slow = head
  //   while (fast.next) {
  //     if (fast.next.next) {
  //       slow = slow.next
  //       fast = fast.next.next
  //     }
  //     if (fast.next && !fast.next.next) {
  //       return slow.next
  //     }
  //   }
  //   return slow

  // 优化写法
  let fast = head
  let slow = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

// 数组解法
var middleNode = function (head) {
  let a = [head]
  while (a[a.length - 1].next !== null) {
    a.push(a[a.length - 1].next)
  }
  return a[Math.floor(a.length / 2)]
}
// @lc code=end
