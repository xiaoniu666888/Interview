// function JSONP({ url, params, callback }) {
//   return new Promise((resolve) => {
//     const script = document.createElement("script")
//     window[callback] = function (data) {
//       resolve(data)
//       document.body.removeChild(script)
//     }
//     params = {
//       ...params,
//       callback
//     }
//     let arr = []

//     for (let key in params) {
//       arr.push(`${key}=${params[key]}`)
//     }
//     script.src = `${url}?${arr.join("&")}`
//     console.log(script.src)
//     document.body.append(script)
//   })
// }

function handleData(data) {
  console.log(data)
}

function JSONP({ url, params, callback }) {
  return new Promise((resolve) => {
    const script = document.createElement("script")
    window[callback] = function (data) {
      resolve(data)
      document.removeChild(script)
    }

    let arr = []
    params = {
      ...params,
      callback
    }
    for (let key in params) {
      arr.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${arr.join("&")}`
    console.log(script.src)
    document.body.append(script)
  })
}
JSONP({
  url: "http://codercba.com:9002/comment/music",
  params: { id: 1, limit: 1 },
  callback: "handleData"
})
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error("Error fetching data:", error)
  })
