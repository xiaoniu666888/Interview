function heapSort(arr) {
  let len = arr.length
  // 构建最大堆
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heap(arr, len, i)
  }
  console.log(arr)
  // 一个一个从堆顶取出元素
  for (let i = len - 1; i > 0; i--) {
    // 移动当前根到数组末尾
    ;[arr[0], arr[i]] = [arr[i], arr[0]]
    // 调整堆
    console.log(`第${len - i}次移动前`, arr)
    heap(arr, i, 0)
    console.log(`第${len - i}次移动后`, arr)
  }
  return arr
}
function heap(arr, len, i) {
  let largeset = i
  let left = 2 * i + 1
  let right = 2 * i + 2
  if (left < len && arr[largeset] < arr[left]) {
    largeset = left
  }
  if (right < len && arr[largeset] < arr[right]) {
    largeset = right
  }
  if (largeset !== i) {
    ;[arr[i], arr[largeset]] = [arr[largeset], arr[i]]
    heap(arr, len, largeset)
  }
}
let arr = [3, 5, 2, 1, 4]
console.log(heapSort(arr))
console.log(arr)
