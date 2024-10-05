function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    // 每次之后, 就会确定一个比较大的值在后边
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
console.log(bubbleSort([5, 3, 2, 1, 4]))
