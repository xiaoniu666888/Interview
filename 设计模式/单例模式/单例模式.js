// 闭包的方式
function getGetInstance() {
  let instance // 闭包
  class Singleton {}
  return () => {
    if (instance == null) {
      instance = new Singleton()
    }
    return instance
  }
}

const getInstance = getGetInstance()
const s1 = getInstance()
const s2 = getInstance()
console.log(s1 === s2) // true

// -------------------------------------------

// 模块化的方式

// getInstance.js文件 - 开始
let instance
class Singleton {}

export default () => {
  if (instance == null) {
    instance = new Singleton()
  }
  return instance
}
// getInstance.js文件 - 结束
