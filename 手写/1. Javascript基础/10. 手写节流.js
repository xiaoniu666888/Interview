function throttle(fn, interval) {
  let curTime = Date.now()
  return function () {
    let context = this
    let args = arguments
    let nowTime = Date.now()
    // 如果两次时间间隔超过了指定时间，那么就执行函数
    if (nowTime - curTime > interval) {
      curTime = Date.now()
      return fn.apply(context, args)
    }
  }
}

function handleClick() {
  console.log("click")
}

window.addEventListener("click", throttle(handleClick, 3000))

function myThrottle(fn, interval) {
  let curTime = Date.now()

  return function () {
    let context = this
    let nowTime = Date.now()
    let args = arguments
    if (nowTime - curTime > interval) {
      fn.apply(context, args)
    }
  }
}
