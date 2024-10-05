function quickSort(arr) {
  let len = arr.length

  if (len <= 1) {
    return arr
  }
  let left = []
  let right = []
  let mid = Math.floor(len / 2)
  for (let i = 0; i < len; i++) {
    if (i === mid) {
      continue
    }
    if (arr[i] < arr[mid]) {
      left.push(arr[i])
    }
    if (arr[i] > arr[mid]) {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), arr[mid], ...quickSort(right)]
}
console.log(quickSort([5, 3, 2, 1, 4]))
