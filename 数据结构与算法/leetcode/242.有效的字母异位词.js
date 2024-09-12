/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 长度不同直接返回fasle
  if (s.length !== t.length) return false
  // 26个字母
  const hashArr = new Array(26).fill(0)
  // 获取a的 ACSII码
  const base = "a".charCodeAt()
  for (const i of s) {
    // 记录s中每个字母出现的次数
    hashArr[i.charCodeAt() - base]++
  }
  for (const j of t) {
    // 这种情况说明t中含有s中没有的字母
    if (hashArr[j.charCodeAt() - base] === 0) {
      return false
    }
    // 记录t中字母出现的次数, 到这里的字母都是s和t共同的字母
    hashArr[j.charCodeAt() - base]--
  }
  return true
}
// @lc code=end
