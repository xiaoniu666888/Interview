/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function (head, val) {
//   // 定义虚拟头节点
//   let dummyHead = new ListNode(0, head)
//   // 用一个指针进行遍历
//   let current = dummyHead
//   while (current.next) {
//     // 当前节点的下一个节点是目标值
//     if (current.next.val === val) {
//       // 指向下一个的下一个, 那么目标值就被删除了
//       current.next = current.next.next
//       // 跳出本次循环, 继续下一个循环, 因为可能还有节点没有被删除
//       continue
//     }
//     // 当前节点的下一个节点不是目标值, 那么就继续遍历
//     current = current.next
//   }
//   // 新的头节点, 也就是虚拟头节点的next
//   return dummyHead.next
// }

// 不使用虚拟头节点
var removeElements = function (head, val) {
  // 删除头部节点
  while (head !== null && head.val === val) {
    head = head.next
  }
  if (head === null) return head
  // 头节点不是目标节点的情况
  let pre = head
  let cur = head.next
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next
    } else {
      pre = pre.next
    }
    cur = cur.next
  }
  return head
}

// @lc code=end
