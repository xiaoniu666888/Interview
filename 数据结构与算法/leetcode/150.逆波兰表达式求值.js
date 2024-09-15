/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let arr = []
  for (let i = 0; i < tokens.length; i++) {
    if (isNaN(Number(tokens[i]))) {
      const n2 = arr.pop()
      const n1 = arr.pop()
      switch (tokens[i]) {
        case "+":
          arr.push(n1 + n2)
          break
        case "-":
          arr.push(n1 - n2)
          break
        case "*":
          arr.push(n1 * n2)
          break
        case "/":
          arr.push((n1 / n2) | 0)
          break
      }
    } else {
      arr.push(Number(tokens[i]))
    }
  }
  return arr[0]
}
console.log(evalRPN(["2", "1", "+", "3", "*"]))
// @lc code=end
