/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  // 虚拟头节点
  let dummy = new ListNode(0, head)
  // 临时变量保存虚拟头节点
  // 要想交换第一个和第二个, 就必须把tem指向第一个的上一个, 然后进行操作
  let tem = dummy
  // 交换的前提是交换的两个节点必须存在
  while (tem.next && tem.next.next) {
    // 要交换的相对第一个节点
    let pre = tem.next
    // 要交换的相对第二个节点
    let cur = tem.next.next
    // 交换
    pre.next = cur.next
    cur.next = pre
    tem.next = cur
    // 更新临时指针(变量)的位置
    tem = pre
  }
  // 返回虚拟头节点的next, 也就是head
  return dummy.next
}
// @lc code=end
