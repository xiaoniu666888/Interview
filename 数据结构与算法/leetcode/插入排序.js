function insertSort(arr) {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
  return arr
}
console.log(insertSort([5, 3, 2, 1, 4]))

function insertSort1(arr) {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
  return arr
}
console.log(insertSort1([1, 4, 2, 5, 3]))
