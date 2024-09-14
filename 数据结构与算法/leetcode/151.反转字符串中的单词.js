/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let sArr = Array.from(s)
  // 去空格
  removeExtraSpace(sArr)
  // 反转字母
  reverse(sArr, 0, sArr.length - 1)
  // 反转单词
  let start = 0
  for (let i = 0; i <= sArr.length; i++) {
    if (sArr[i] === " " || i === sArr.length) {
      reverse(sArr, start, i - 1)
      start = i + 1
    }
  }
  return sArr.join("")
}
// 去除空格
function removeExtraSpace(sArr) {
  let fast = 0
  let slow = 0
  while (fast < sArr.length) {
    // 如果开头位置为空格或者有连续空格 那就移动快指针
    if (sArr[fast] == " " && (fast === 0 || sArr[fast - 1] == " ")) {
      fast++
    } else {
      // 如果fast指向的不是空格  那就说明遇到的是单词字母
      sArr[slow] = sArr[fast]
      slow++
      fast++
    }
  }
  // 移除末尾空格
  sArr.length = sArr[slow - 1] === " " ? slow - 1 : slow
}
// 反转字母
function reverse(sArr, start, end) {
  let left = start
  let right = end
  while (left < right) {
    ;[sArr[left], sArr[right]] = [sArr[right], sArr[left]]
    left++
    right--
  }
}
removeExtraSpace(["h", "e", " ", " "])
// @lc code=end
