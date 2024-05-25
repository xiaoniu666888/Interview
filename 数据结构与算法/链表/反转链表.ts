// 递归
// 创建链表
class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

function reverse(head: ListNode<number> | null) {
  if (head === null || head.next === null) return;

  let pre: ListNode<number> | null = null;
  let cur = head;
  while (cur) {
    let tem = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tem!;
  }
  return pre;
}
export {};
