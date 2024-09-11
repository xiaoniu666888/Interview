/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
var MyLinkedList = function () {
  this.size = 0 // 长度
  this.head = new ListNode(0) // 头部
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  // 索引小于0 或者 大于等于链表的长度 直接返回 -1
  if (index < 0 || index >= this.size) {
    return -1
  }
  // 定义一个当前指针用于遍历
  let cur = this.head
  // 从0开始进行遍历, 直到遍历出到index
  for (let i = 0; i <= index; i++) {
    cur = cur.next
  }
  // 返回val
  return cur.val
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  // 添加头部
  this.addAtIndex(0, val)
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  // 添加尾部, 索引为 this.size - 1 + 1
  this.addAtIndex(this.size, val)
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  // 判断索引进行剪枝
  if (index > this.size) {
    return
  }
  // 确保索引不为0
  index = Math.max(0, index)
  // 定义一个指针进行遍历
  let pre = this.head
  // 循环到目标指针的上一个
  for (let i = 0; i < index; i++) {
    pre = pre.next
  }
  // 定义节点
  let toAdd = new ListNode(val)
  // 添加
  toAdd.next = pre.next
  pre.next = toAdd
  // 更新长度
  this.size++
}

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  // 判断索引进行剪枝
  if (index < 0 || index >= this.size) {
    return
  }
  // 用于遍历的指针
  let cur = this.head
  // 循环到目标值的上一个值
  for (let i = 0; i < index; i++) {
    cur = cur.next
  }
  // 删除
  cur.next = cur.next.next
  // 更新链表长度
  this.size--
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
