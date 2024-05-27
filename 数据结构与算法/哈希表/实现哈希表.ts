class HashTable<T> {
  // 创建一个数组用来存放链地址法中的链
  storage: [string, T][][] = [];
  // 数组长度
  private length: number = 7;
  // 已有元素个数
  private count = 0;

  isPrime(num: number): boolean {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  private resize(newLength: number) {
    // 1. 设置新长度,新长度要是质数
    let newPrime = newLength;

    while (!this.isPrime(newPrime)) {
      newPrime++;
    }
    console.log("获取到的质数容量：", newPrime);
    this.length = newPrime;
    // 2. 获取原来所有的数据，并重新放入新的hashTable中
    const oldStorage = this.storage;
    this.storage = [];
    this.count = 0;
    oldStorage.forEach((bucket) => {
      if (!bucket) return;
      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i];
        const key = tuple[0];
        const value = tuple[1];
        this.put(key, value);
      }
    });
  }
  private hashFunc(key: string, max: number) {
    // 1. 计算hashCode cats => 60337(27为底的时候)
    let hashCode = 0;
    const length = key.length;
    for (let i = 0; i < length; i++) {
      // 霍纳法则计算hashCode
      hashCode = 31 * hashCode + key.charCodeAt(i);
    }
    // 2. 计算出索引值
    const indedx = hashCode % max;
    return indedx;
  }
  put(key: string, value: T) {
    const index = this.hashFunc(key, this.length);
    let bucket = this.storage[index];
    if (!bucket) {
      bucket = [];
      this.storage[index] = bucket;
    }
    let isUpdate = false;
    // 4. 确定已经有一个数组了, 但是数组中的是否已经存在key是不确定的
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const tupleKey = tuple[0];
      if (tupleKey === key) {
        // 修改/更新操作
        tuple[1] = value;
        isUpdate = true;
      }
    }
    // 5. 如果没有进行覆盖, 那么在该位置进行添加
    if (!isUpdate) {
      bucket.push([key, value]);
      this.count++;
      const loadFactor = this.count / this.length;
      // 发现loadFactor大于0.75，直接扩容
      if (loadFactor > 0.75) {
        this.resize(this.length * 2);
      }
    }
  }
  // 获取值
  get(key: string): T | undefined {
    // 1. 根据key获取索引值index
    const index = this.hashFunc(key, this.length);
    // 2. 获取bucket(桶)
    const bucket = this.storage[index];
    if (!bucket) return undefined;
    // 3. 对桶进行遍历
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const tupleKey = tuple[0];
      const tupleValue = tuple[1];
      if (tupleKey === key) {
        return tupleValue;
      }
    }
    return undefined;
  }
  // 删除操作
  delete(key: string): T | undefined {
    // 1. 获取索引的位置
    const index = this.hashFunc(key, this.length);
    // 2. 获取bucket(桶)
    const bucket = this.storage[index];
    // 没有就直接返回undefined
    if (!bucket) return undefined;
    // 有桶就遍历桶数组
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const tupleKey = tuple[0];
      const tupleValue = tuple[1];
      if (tupleKey === key) {
        bucket.splice(i, 1);
        this.count--;

        const loadFactor = this.count / this.length;
        // 发现loadFactor小于0.25，进行缩容,最小为7
        if (loadFactor < 0.25 && this.length > 7) {
          this.resize(Math.floor(this.length / 2));
        }
        return tupleValue;
      }
    }
    return undefined;
  }
}

const hashTable = new HashTable();
hashTable.put("aaa", 100);
// console.log(hashTable.get("aaa"));
hashTable.put("aaa", 200);
hashTable.put("bbb", 300);
hashTable.put("ccc", 666);
hashTable.put("ddd", 777);
// console.log(hashTable.storage);

hashTable.put("eee", 888);
hashTable.put("fff", 999);
console.log(hashTable.storage);
// console.log(hashTable.get("aaa"));
// console.log(hashTable.get("bbb"));
// console.log(hashTable.get("ccc"));
// console.log(hashTable.get("ddd"));
console.log("delete:", hashTable.delete("aaa"));
console.log("delete:", hashTable.delete("bbb"));
console.log("delete:", hashTable.delete("ccc"));
console.log("delete:", hashTable.delete("ddd"));
console.log(hashTable.storage);
// console.log("get:", hashTable.get("aaa"));
