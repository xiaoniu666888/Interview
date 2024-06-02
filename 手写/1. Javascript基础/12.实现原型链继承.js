function Animal() {
  this.colors = ["red", "green"]
}
Animal.prototype.getColor = function () {
  return this.colors
}

function Dog() {}
Dog.prototype = new Animal()

let dog1 = new Dog()
dog1.colors.push("pink")

let dog2 = new Dog()
console.log(dog2.getColor())
