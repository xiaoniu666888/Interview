/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const count = new Map()
  const res = []
  // 保存每个单词出现的次数
  for (const word of words) {
    count.set(word, (count.get(word) || 0) + 1)
  }
  // 遍历所有key并保存
  for (const entry of count.keys()) {
    res.push(entry)
  }
  // 排序
  res.sort((word1, word2) => {
    // 如果出现的次数相同, 那么按照字典序排序, 如果word1 在 字典序 上小于 word2, 那么word1 应该 排在 word2 前边
    return count.get(word1) === count.get(word2)
      ? word1.localeCompare(word2)
      : count.get(word2) - count.get(word1)
  })
  // res.sort((a,b) => {
  // 如果 a - b 小于 0 ，那么 a 会被排列到 b 之前；
  // return a - b
  //})
  return res.slice(0, k)
}
// @lc code=end
