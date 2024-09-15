/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

// var MyStack = function () {
//   // 两个队列实现
//   this.queue1 = []
//   this.queue2 = []
// }

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function (x) {
//   this.queue1.push(x)
// }

// /**
//  * @return {number}
//  */
// MyStack.prototype.pop = function () {
//   if (!this.queue1.length) {
//     ;[this.queue1, this.queue2] = [this.queue2, this.queue1]
//   }
//   while (this.queue1.length > 1) {
//     this.queue2.push(this.queue1.shift())
//   }
//   return this.queue1.shift()
// }

// /**
//  * @return {number}
//  */
// MyStack.prototype.top = function () {
//   const x = this.pop()
//   this.queue1.push(x)
//   return x
// }

// /**
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function () {
//   return !this.queue1.length && !this.queue2.length
// }

var MyStack = function () {
  // 一个队列实现
  this.queue = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x)
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  //   let len = this.queue.length
  //   while (len > 1) {
  //     this.queue.push(this.queue.shift())
  //     len--
  //   }
  return this.queue.pop()
}

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  const x = this.pop()
  this.queue.push(x)
  return x
}

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue.length
}
const stack = new MyStack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
console.log(stack.queue)
console.log(stack.pop())
console.log(stack.queue)

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
