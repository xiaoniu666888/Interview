class IProduct {
    name: string;
    fn1: () => void;
    fn2: () => void;
}
class Product1 implements IProduct {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    fn1() {
        alert('p1 fn1')
    }
    fn2() {
        alert('p2 fn2')
    }
}
class Product2 implements IProduct {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    fn1() {
        alert('p2 fn1')
    }
    fn2() {
        alert('p2 fn2')
    }
}
class Creator {
    create(type: string, name: string): IProduct {
        if (type === 'p1') {
            return new Product1(name)
        }
        if (type === 'p2') {
            return new Product2(name)
        }
        throw new Error('Invalid type')

    }
}

// test
const creator = new Creator();
const p1 = creator.create('p1', 'name1');
const p2 = creator.create('p2', 'namee2')