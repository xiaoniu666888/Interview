// async function fecth(id) {
//   let random = await new Promise((resolve) =>
//     setTimeout(() => resolve(2 * Math.random()), 100)
//   )
//   if (random > 0.8) {
//     return { id, user: `user ${id}` }
//   } else {
//     return { error: `User ${id} is not defined` }
//   }
// }

// function fetchData(ids, maxCountcurrent) {
//   let left = 0
//   let right = maxCountcurrent
//   let arr = ids.slice(left, right)
//   let resArr = []
//   return new Promise((resolve, reject) => {
//     while (true) {
//       if (arr.length === 0) {
//         console.log(resArr)
//         resolve()
//         return
//       }
//       arr.forEach((id) => {
//         resArr.push(fetch(id))
//       })
//       left += maxCountcurrent
//       right += maxCountcurrent
//       arr = ids.slice(left, right)
//     }
//   })
// }
// fetchData([1, 2, 3, 4], 3)
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

async function fetch(id) {
  // 使用 setTimeout 来模拟异步操作
  let random = 2 * Math.random()
  //   await new Promise((resolve) =>
  //     setTimeout(() => resolve(2 * Math.random()), 100)
  //   )
  if (random > 0.8) {
    return { id, user: `user ${id}` }
  } else {
    return { error: `User ${id} is not defined` }
  }
}

function fetchData(ids, maxCount) {
  let results = []
  let index = 0

  function fetchBatch() {
    const batch = ids.slice(index, index + maxCount)
    if (batch.length === 0) {
      return Promise.resolve()
    }

    const promises = batch.map(fetch)
    return Promise.all(promises).then((batchResults) => {
      results.push(...batchResults)
      index += maxCount
      return fetchBatch() // 递归调用以获取下一批
    })
  }

  return fetchBatch().then(() => results)
}

fetchData([1, 2, 3, 4], 2)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
