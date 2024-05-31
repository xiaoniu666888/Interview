import Node from "../types/Node"
import { btPrint } from "hy-algokit"
class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
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
// bst.print()
// bst.preOrderTraverse()
// bst.inOrderTraverse()
// bst.postOrderTraverse()
bst.levelOrderTraverse()
export {}
