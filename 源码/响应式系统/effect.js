let val = 1
// 产生副作用
function effect() {
  val = 2
}

const obj = {
  text: "hello word"
}

function effect() {
  // effect函数的执行方法会读取 obj.text
  document.body.innerHTML = obj.text
}
// 修改这里 希望副作用函数会重新执行
obj.text = "hello vue3"
