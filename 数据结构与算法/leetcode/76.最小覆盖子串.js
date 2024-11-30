/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 超出时间限制
var minWindow1 = function (s, t) {
  let slow = 0
  let result = ""
  for (let fast = 0; fast < s.length; fast++) {
    if (fast - slow + 1 >= t.length) {
      let tem = s.slice(slow, fast + 1)
      if (compare(tem, t)) {
        if (result === "") {
          result = tem
          slow++
        } else {
          result = result.length > tem.length ? tem : result
          slow++
        }
        // 缩小窗口
        while (
          slow < s.length &&
          compare(s.slice(slow, fast + 1), t) &&
          fast - slow + 1 >= t.length
        ) {
          let tem = s.slice(slow, fast + 1)
          if (compare(s.slice(slow, fast + 1), t)) {
            result = result.length > tem.length ? tem : result
            slow++
          } else {
            break
          }
        }
      }
    }
  }
  return result
}

function compare(left, right) {
  if (!left || !right) {
    return false
  }

  // 创建一个对象来存储 right 中每个字符的出现次数
  const rightCharCounts = {}
  for (let char of right) {
    if (rightCharCounts[char]) {
      rightCharCounts[char]++
    } else {
      rightCharCounts[char] = 1
    }
  }
  // 遍历 left，减少 rightCharCounts 中对应字符的计数
  for (let char of left) {
    if (rightCharCounts[char]) {
      rightCharCounts[char]--
      // 如果某个字符的计数已经归零，则将其从对象中删除（可选步骤，用于节省内存）
      if (rightCharCounts[char] === 0) {
        delete rightCharCounts[char]
      }
    }
  }
  // 检查 rightCharCounts 是否为空，如果不为空则说明 left 不包含 right 的所有字符（考虑重复）
  return Object.keys(rightCharCounts).length === 0
}

function minWindow(s, t) {
  let need = new Map()
  //   统计 t 中每个字符的出现次数
  for (let c of t) {
    need.set(c, (need.get(c) || 0) + 1)
  }
  let left = 0
  let right = 0
  // 记录当前窗口中满足需求的字符种类数
  let valid = 0
  // 记录最小子串的长度，初始值设为无穷大
  let len = Infinity
  // 创建一个Map来存储当前窗口中每个字符的数
  let window = new Map()
  // 记录最小子串的起始位置
  let start = 0
  while (right < s.length) {
    let c = s[right]
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1)
      if (window.get(c) === need.get(c)) {
        // 满足条件，则 valid 加 1
        valid++
      }
    }
    // 移动右指针，直到满足条件为止
    right++
    // 当窗口中的字符种类数满足目标字符串t的需求时，尝试收缩窗口
    while (valid === need.size) {
      // 如果当前窗口的长度小于已记录的最小子串长度，则更新最小子串
      if (right - left < len) {
        // 更新最小子串的起始位置和长度
        start = left
        len = right - left
      }
      // 取出即将移出窗口的字符
      const d = s[left]
      // 左边界向右移动一位
      left++
      // 如果移出的字符在目标字符串t的需求列表中
      if (need.has(d)) {
        // 如果当前窗口中该字符的数量正好满足目标字符串t的需求
        if (window.get(d) === need.get(d)) {
          // 减少满足条件的字符种类数
          valid--
        }
        // 更新当前窗口中该字符的数量
        window.set(d, window.get(d) - 1)
      }
    }
  }

  return len === Infinity ? "" : s.slice(start, start + len)
}
minWindow("aa", "aa")
// @lc code=end
