import Node from "../types/Node"
import { btPrint } from "hy-algokit"
class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
  parent: TreeNode<T> | null = null
  get isLeft(): boolean {
    return !!(this.parent && this.parent?.left === this)
  }
  get isRight(): boolean {
    return !!(this.parent && this.parent?.right === this)
  }
}

class BSTree<T> {
  root: TreeNode<T> | null = null
  print() {
    btPrint(this.root)
  }
  insert(value: T) {
    const newNode = new TreeNode(value)

    if (!this.root) {
      // 根节点为空的情况
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  // 先序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root)
  }
  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log(node.value)
      this.preOrderTraverseNode(node.left)
      this.preOrderTraverseNode(node.right)
    }
  }
  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }
  // 后序遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }
  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseNode(node.left)
      this.postOrderTraverseNode(node.right)
      console.log(node.value)
    }
  }
  // 层序遍历
  levelOrderTraverse() {
    if (!this.root) {
      return
    }
    const queue: TreeNode<T>[] = []
    queue.push(this.root)
    while (queue.length) {
      const current = queue.shift()!
      console.log(current?.value)
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
    }
  }

  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.inOrderTraverseNode(node.left)
      console.log(node.value)
      this.inOrderTraverseNode(node.right)
    }
  }

  // 找最大值
  getMaxValue(): T | null {
    // if (!this.root) return null
    let current = this.root
    let max = this.root?.value
    while (current && current.right) {
      max = current.right!.value
      current = current.right
    }
    return max ?? null
  }
  // 找最小值
  getMinValue(): T | null {
    let current = this.root

    while (current && current.left) {
      current = current.left
    }
    return current?.value ?? null
  }
  // 搜索某个值
  search(value: T): boolean {
    let current = this.root
    while (current) {
      if (current.value === value) return true
      if (current.value < value) {
        current = current.right
      } else {
        current = current.left
      }
    }
    return false
  }
  // 搜索并返回某个值
  searchNode(value: T): TreeNode<T> | null {
    let current = this.root
    let parent: TreeNode<T> | null = null
    while (current) {
      if (current.value === value) {
        return current
      }
      parent = current
      if (current.value < value) {
        current = current.right
      } else {
        current = current.left
      }
      if (current) current.parent = parent
    }
    return null
  }
  // 删除某个值
  remove(value: T): boolean {
    // 1. 先搜索到当前节点
    const current = this.searchNode(value)
    if (!current) {
      return false
    }
    // 2. 获取到三个东西，(1) 当前节点 (3) 当前节点的父节点  (2) 是属于父节点的左子节点还是右子节点
    let replaceNode: TreeNode<T> | null = null
    // 删除叶子节点
    if (current.left === null && current.right === null) {
      replaceNode = null
    }
    // 删除有一个左节点的节点
    else if (current.right === null) {
      replaceNode = current.left
    }
    // 只有一个右节点的节点
    else if (current.left === null) {
      replaceNode = current.right
    }
    // 有两个子节点的节点
    else {
      const successor = this.getSuccessor(current)
      replaceNode = successor
    }
    if (current === this.root) {
      this.root = replaceNode
    } else if (current.isLeft) {
      current.parent!.left = replaceNode
    } else {
      current.parent!.right = replaceNode
    }
    return true
  }
  // 得到后继节点
  private getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    let current = delNode.right
    let successor: TreeNode<T> | null = null
    while (current) {
      successor = current
      current = current.left
      if (current) {
        current.parent = successor
      }
    }
    // 拿到后继节点之后，将删除节点的left赋值给后继节点的left
    if (successor !== delNode.right) {
      successor!.parent!.left = successor!.right
      successor!.right = delNode.right
    }
    successor!.left = delNode!.left
    return successor!
  }
}
const bst = new BSTree<number>()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(9)
bst.insert(13)
bst.insert(20)

bst.insert(3)
bst.insert(6)
bst.insert(8)
bst.insert(10)
bst.insert(12)
bst.insert(14)
bst.insert(18)
bst.insert(25)
bst.print()
// bst.preOrderTraverse()
// bst.inOrderTraverse()
// bst.postOrderTraverse()
// bst.levelOrderTraverse()
// console.log(bst.getMaxValue())
// console.log(bst.getMinValue())

// console.log(bst.search(9))
// console.log(bst.search(99))
// bst.remove(3)
// bst.remove(8)
// bst.remove(18)
// bst.remove(10)
// bst.remove(25)
// bst.print()
// bst.remove(20)
// bst.remove(9)
bst.remove(11)
bst.print()
bst.remove(15)
bst.print()

export {}
