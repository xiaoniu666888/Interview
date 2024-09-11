/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 如果有环一定会相遇, 因为快指针每次相对于慢指针走一个节点, 可以看作只有快指针每次走一个节点
  // 定义快慢指针
  let slow = head
  let fast = head
  while (fast) {
    // 慢指针每次走一个节点
    slow = slow.next
    // 防止空指针异常
    if (fast.next) {
      // 快指针每次走两个节点
      fast = fast.next.next
    } else {
      // 如果fast为null, 说明已经到了环的结尾, 也就是没有环
      return false
    }
    // 相遇表示有环
    if (fast === slow) {
      return true
    }
  }
  return false
}
// @lc code=end
