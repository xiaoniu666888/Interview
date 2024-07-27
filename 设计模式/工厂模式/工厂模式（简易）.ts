class Product {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  fn1() {
    console.log('product fn1');
  }
  fn2() {
    console.log('product fn2');

  }
}

// 工厂
class Creator {
  create(name: string): Product {
    return new Product(name)
  }
}

const creator = new Creator();
const p1 = creator.create('p1');
const p2 = creator.create('p2');
p1.fn2()
p2.fn1()
export { }

