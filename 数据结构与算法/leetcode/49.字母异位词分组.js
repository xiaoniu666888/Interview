/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams1 = function (strs) {
//   const map = new Map()
//   for (const s of strs) {
//     // 将字符串转换成字符数组，排序后重新组合成字符串作为键
//     const key = s.split("").sort().join("")

//     if (!map.has(key)) {
//       map.set(key, [])
//     }
//     // 将原始字符串添加到对应的键值中
//     map.get(key).push(s)
//   }
//   // 返回所有分组
//   return Array.from(map.values())
// }

var groupAnagrams = function (strs) {
  let result = []
  let len = strs.length
  for (let i = 0; i < len; i++) {
    let isGrouped = false
    for (let arr of result) {
      if (compareWord(arr[0], strs[i])) {
        arr.push(strs[i])
        isGrouped = true
        break
      }
    }
    if (!isGrouped) {
      result.push([strs[i]])
    }
  }
  return result
}
function compareWord(left, right) {
  if (left.length !== right.length) {
    return false
  }
  let hash = new Array(26).fill(0)
  let base = "a".charCodeAt()
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
console.log(compareWord("abc", "acb"))

// @lc code=end
