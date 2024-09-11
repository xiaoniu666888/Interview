/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
// var detectCycle = function (head) {
//   let cur = head
//   // 使用Set解题
//   const visited = new Set()
//   while (cur !== null) {
//     // 说明有环
//     if (visited.has(cur)) {
//       return cur
//     }
//     visited.add(cur)
//     cur = cur.next
//   }
//   return null
// }

var detectCycle = function (head) {
  if (head === null) {
    return null
  }
  let slow = head
  let fast = head
  // 防止空指针异常
  while (fast !== null) {
    slow = slow.next
    // 防止空指针异常
    if (fast.next !== null) {
      // 快指针前进两步
      fast = fast.next.next
    } else {
      // 说明没有环
      return null
    }
    // 快慢指针相遇
    if (fast === slow) {
      // 定义一个指针用于找环
      let ptr = head
      // head到环的入口的距离 也就是 从快慢指针相遇的地方到环的入口的距离 两者相等
      // 同时移动, 相遇的地方就是环的入口
      while (ptr !== slow) {
        ptr = ptr.next
        slow = slow.next
      }
      return ptr
    }
  }
  return null
}
// @lc code=end
