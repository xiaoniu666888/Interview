function myPromiseAll(arr) {
  const results = []
  let count = 0
  return new Promise((resolve, reject) => {
    arr.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          results[index] = res
          count++
          if (count === arr.length) {
            resolve(results)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  })
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1")
  }, 900)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2")
  }, 800)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3")
  }, 700)
})
myPromiseAll([p3, p1, p2])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
Promise.allSettled([p3, p1, p2])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
