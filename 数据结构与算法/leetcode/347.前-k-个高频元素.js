/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 一般解法, 时间复杂度为O(nlogn)
// var topKFrequent = function (nums, k) {
//   let count = new Map()
//   let res = []
//   for (const num of nums) {
//     count.set(num, (count.get(num) || 0) + 1)
//   }
//   for (const entry of count.keys()) {
//     res.push(entry)
//   }
//   res.sort((a, b) => {
//     return count.get(b) - count.get(a)
//   })
//   return res.slice(0, k)
// }
// topKFrequent([1, 1, 1, 2, 2, 3], 2)

// 小顶堆解法
// var topKFrequent = function (nums, k) {
//   const map = new Map()
//   const res = []
//   //使用 map 统计元素出现频率
//   for (const num of nums) {
//     map.set(num, (map.get(num) || 0) + 1)
//   }
//   //创建小顶堆
//   const heap = new PriorityQueue({
//     compare: (a, b) => a.value - b.value
//   })
//   for (const [key, value] of map) {
//     heap.enqueue({ key, value })
//     if (heap.size() > k) heap.dequeue()
//   }
//   //处理输出
//   while (heap.size()) res.push(heap.dequeue().key)
//   return res
// }

// 自己构造堆
// 创建堆结构
class Heap {
  //   constructor(compareFn) {
  //     this.compareFn = compareFn
  //     this.queue = []
  //   }
  constructor(compareFn) {
    this.compareFn = compareFn
    this.queue = []
  }
  //   // 添加
  //   push(item) {
  //     // 推入元素
  //     this.queue.push(item)
  //     // 上浮
  //     let index = this.size() - 1 // 记入推入元素下标
  //     let parent = Math.floor((index - 1) / 2) // 记录父节点下标
  //     while (parent >= 0 && this.compare(parent, index) > 0) {
  //       ;[this.queue[index], this.queue[parent]] = [
  //         this.queue[parent],
  //         this.queue[index]
  //       ]
  //       // 更新下标
  //       index = parent
  //       parent = Math.floor((index - 1) / 2)
  //     }
  //   }
  push(item) {
    // 推入元素
    this.queue.push(item)

    // 上浮
    let index = this.size() - 1 // 记录推入元素下标
    let parent = Math.floor((index - 1) / 2) // 记录父节点下标

    while (parent >= 0 && this.compare(parent, index) > 0) {
      // 注意compare参数顺序
      ;[this.queue[index], this.queue[parent]] = [
        this.queue[parent],
        this.queue[index]
      ]

      // 更新下标
      index = parent
      parent = Math.floor((index - 1) / 2)
    }
  }
  // 获取堆顶元素并移除
  pop() {
    // 边界情况,  只有一个元素或没有元素应直接弹出
    if (this.size() <= 1) {
      return this.queue.pop()
    }
    // 堆顶元素
    const out = this.queue[0]
    // 移除堆顶元素, 填入最后一个元素
    this.queue[0] = this.queue.pop()
    // 下沉
    let index = 0
    let left = 1 // left 是左子节点下标 left + 1 则是右子节点下标
    let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left
    while (this.compare(index, searchChild) > 0) {
      ;[this.queue[index], this.queue[searchChild]] = [
        this.queue[searchChild],
        this.queue[index]
      ]

      // 更新下标
      index = searchChild
      left = 2 * index + 1
      searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left
    }
    return out
  }
  // 获取堆顶元素并移除
  size() {
    return this.queue.length
  }
  // 使用传入的 compareFn 比较两个位置的元素
  compare(index1, index2) {
    // 处理下标越界
    if (this.queue[index1] === undefined) {
      return 1
    }
    if (this.queue[index2] === undefined) {
      return -1
    }
    return this.compareFn(this.queue[index1], this.queue[index2])
  }
}

var topKFrequent = function (nums, k) {
  //   const map = new Map()
  //   for (const num of nums) {
  //     map.set(num, (map.get(num) || 0) + 1)
  //   }
  //   // 创建小顶堆
  //   const heap = new Heap((a, b) => a[1] - b[1])
  //   // entry, 是一个长度为2的数组, 0的位置存储key, 1的位置存储value
  //   for (entry of map.entries()) {
  //     heap.push(entry)
  //   }
  //   if (heap.size() > k) {
  //     heap.pop()
  //   }
  //   const res = []

  //   for (let i = heap.size() - 1; i >= 0; i--) {
  //     res[i] = heap.pop()[0]
  //   }
  //   return res
  const map = new Map()

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  // 创建小顶堆
  const heap = new Heap((a, b) => a[1] - b[1])

  // entry 是一个长度为2的数组，0位置存储key，1位置存储value
  for (const entry of map.entries()) {
    heap.push(entry)

    if (heap.size() > k) {
      heap.pop()
    }
  }

  const res = []

  for (let i = heap.size() - 1; i >= 0; i--) {
    res[i] = heap.pop()[0]
  }

  return res
}

// @lc code=end
