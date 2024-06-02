function debounce(fn, duration) {
  let timer = null

  return function () {
    let context = this
    let args = arguments
    // 如果定时器存在, 那就清除定时器重新计时
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, duration)
  }
}
function handleScroll() {
  let count = 1
  console.log(count)
}

// 假设这是一个滚动事件处理函数
window.addEventListener("click", myDebounce(handleScroll, 2000))

function myDebounce(fn, duration) {
  let timer = null
  return function () {
    let context = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, duration)
  }
}
