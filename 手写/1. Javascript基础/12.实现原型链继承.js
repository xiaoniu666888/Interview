function Animal() {
  this.colors = ["red", "green"]
}
Animal.prototype.getColor = function () {
  return this.colors
}
// 弊端：无法传递参数; 会共享引用类型的属性
function Dog() {}
let animal = new Animal()
Dog.prototype = animal

let dog1 = new Dog()
dog1.colors.push("pink")

let dog2 = new Dog()
console.log(dog2.getColor())

let cat = new Dog()
console.log(cat.getColor())
console.log(animal.getColor())
console.log(Object.getPrototypeOf(cat) === animal)
