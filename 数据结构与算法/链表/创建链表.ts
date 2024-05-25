// Node类，用于封装每一个节点上的信息
class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList类，用于表示链表长度
class LinkedList<T> {
  head: Node<T> | null = null;
  size: number = 0;

  get length() {
    return this.size;
  }

  // 追加节点
  append(value: T) {
    // 1. 根据value创建一个新节点
    const newNode = new Node(value);
    // 2. 判断this.head是否为空
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // current指向最后一个节点
      current.next = newNode;
    }
    this.size++;
  }

  // 遍历链表
  traverse() {
    // 初始化一个数组用于放置值
    const values: T[] = [];

    // 创建虚拟头节点
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join("->"));
  }
  // 插入节点
  insert(value: T, position: number) {
    // 1. 越界判断
    if (position < 0 || position > this.size) return;
    // 2. 根据value创建新的节点
    const newNode = new Node(value);
    // 3. 判断是否需要插入头部
    if (position === 0) {
      // 新的节点指向第一个节点, this.head指向的就是第一个节点，也就是头节点
      newNode.next = this.head;
      // 新的节点现在是头节点
      this.head = newNode;
    } else {
      // 创建虚拟头节点
      let cur = this.head;
      // 创建前一个节点
      let pre: Node<T> | null = null;
      let index = 0;
      while (index < position) {
        pre = cur;
        cur = cur!.next;
        index++;
      }
      newNode.next = cur;
      pre!.next = newNode;
    }
    this.size++;
    return true;
  }
  // 删除节点
  removeAt(position: number): T | null {
    //   // 1. 越界判断
    if (position < 0 || position >= this.size) return null;
    let current = this.head;
    // 2. 判断是否删除第0个节点
    if (position === 0) {
      this.head = current?.next ?? null;
    } else {
      let previous: Node<T> | null = null;
      let index = 0;
      while (index++ < position && current) {
        previous = current;
        current = current.next;
      }
      // 找到要删除的节点
      previous!.next = current!.next ?? null;
    }
    this.size--;
    return current?.value || null;
  }
  // 获取元素
  getNode(position: number): T | null {
    if (position < 0 || position >= this.size) return null;
    let index = 0;
    let current = this.head;
    while (index++ < position && current) {
      current = current.next;
    }

    return current?.value ?? null;
  }
  // 更新节点
  updateNode(value: T, position: number): boolean {
    // 判断边界
    if (position < 0 || position >= this.size) return false;
    // 获取节点
    let index = 0;
    let current = this.head;
    while (index++ < position && current) {
      current = current.next;
    }

    current!.value = value;
    return true;
  }
  // 获取索引
  indexOf(value: T): number {
    let index = 0;
    let current = this.head;
    while (index < this.size) {
      if (current?.value === value) {
        return index;
      } else {
        current = current!.next;
        index++;
      }
    }
    return -1;
  }
  // 删除元素，根据value
  remove(value: T): boolean {
    let current = this.head;
    // let previous: Node<T> | null = null;
    let previous: Node<T> | null = null;

    while (current) {
      if (current.value === value) {
        if (current === this.head) {
          this.head = current.next;
        } else {
          previous!.next = current.next;
        }
        this.size--;
        return true;
      }

      previous = current;
      current = current.next;
    }
    return false;
  }
}
const linkedList = new LinkedList<string>();

linkedList.append("曹操");
linkedList.append("曹丕");
linkedList.append("曹睿");
// console.log(linkedList.head?.next);
linkedList.insert("曹植", 0);
// linkedList.insert("曹冲", 0);
linkedList.insert("曹冲", 1);
// linkedList.removeAt(0);
// console.log(linkedList.removeAt(3));
// console.log(linkedList.getNode(2));
// linkedList.updateNode("曹仁", 0);
// console.log(linkedList.indexOf("曹"));
linkedList.remove("曹操");
linkedList.traverse();

console.log(linkedList.length);
export {};
