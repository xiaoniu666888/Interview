function myPromiseRace(arr) {
  return new Promise((resolve, reject) => {
    arr.forEach((p) => {
      Promise.resolve(p)
        .then((res) => {
          resolve(res)
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
  }, 900)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3")
  }, 900)
})

myPromiseRace([p3, p2, p1]).then((res) => {
  console.log(res)
})
