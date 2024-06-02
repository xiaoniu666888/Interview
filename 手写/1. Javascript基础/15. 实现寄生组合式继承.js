function Animal(name) {
  this.name = name
}
Animal.prototype.getName = function () {
  return this.name
}

function Dog(name, age) {
  this.age = age
  Animal.call(this, name)
}

Dog.prototype = Object.create(new Animal())

Dog.prototype.constructor = Dog

const dog1 = new Dog("wangcai", 18)
const dog2 = new Dog("dahuang", 20)
console.log(dog1.getName())
console.log(dog2.getName())
console.log(dog1.name, dog1.age)
console.log(dog2.name, dog2.age)

Dog.prototype.height = 1.88
Animal.prototype.height = 1.99
const cat = new Animal()
console.log(cat.height)
console.log(dog1.height)
