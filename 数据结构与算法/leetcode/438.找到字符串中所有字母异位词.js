/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let slow = 0
  let result = []
  for (let fast = 0; fast < s.length; fast++) {
    if (fast - slow + 1 === p.length) {
      if (compareWord(s.slice(slow, fast + 1), p)) {
        result.push(slow)
        slow++
      } else {
        slow++
      }
    }
  }
  return result
}

/**
 * @param {string} left
 * @param {string} right
 * @return {boolean}
 */
function compareWord(left, right) {
  if (!left || !right) {
    return false
  }
  if (left.length !== right.length) {
    return false
  }
  let hash = new Array(26).fill(0)
  const base = "a".charCodeAt()
  for (const l of left) {
    hash[l.charCodeAt() - base]++
  }
  for (const r of right) {
    if (hash[r.charCodeAt() - base] === 0) {
      return false
    }
    hash[r.charCodeAt() - base]--
  }
  return true
}
// console.log(compareWord("cab", "cba"))
console.log(findAnagrams("cbaebabacd", "abc"))
// @lc code=end
