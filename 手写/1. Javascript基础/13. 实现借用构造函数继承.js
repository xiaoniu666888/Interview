function Animal(name) {
  this.name = name
  this.getName = function () {
    return this.name
  }
}

function Dog(name) {
  Animal.call(this, name)
}

Dog.prototype = new Animal()

const dog1 = new Dog("wangcai")
const dog2 = new Dog("dahuang")
console.log(dog1.getName())
console.log(dog2.getName())
console.log(dog1.name)
console.log(dog2.name)
