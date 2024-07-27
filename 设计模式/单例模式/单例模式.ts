class SingleTon {
    // private 无法在外面实例化
    private constructor() { }

    // private 无法在外面获取
    private static instance: SingleTon | null

    // 获取单例
    static getInstance(): SingleTon {
        if (SingleTon.instance == null) {
            SingleTon.instance = new SingleTon()
        }
        return SingleTon.instance // 单例模式
    }
}

const s1 = SingleTon.getInstance() // 获取单例对象的方式
const s2 = SingleTon.getInstance()
console.log(s1 === s2) // true

// SingleTon.instance  // 属性“instance”为私有属性，只能在类“SingleTon”中访问
// const s3 = new SingleTon() // 类“SingleTon”的构造函数是私有的，仅可在类声明中访问