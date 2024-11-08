function Animal(name) {
  this.name = name || "default name"
  this.getName = function () {
    return this.name
  }
}
// 弊端：方法无法复用;
function Dog(name) {
  Animal.call(this, name)
}
let animal = new Animal()
Dog.prototype = animal

const dog1 = new Dog("wangcai")
const dog2 = new Dog("dahuang")
console.log(dog1.getName())
console.log(dog2.getName())
console.log(animal.getName())
console.log(Dog.prototype.constructor === Dog) // false
