class HashTable<T> {
  // 创建一个数组用来存放链地址法中的链
  private storage: [string, T][][] = [];
  // 数组长度
  private length: number = 7;
  // 已有元素个数
  private conut = 0;

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
      this.conut++;
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
}

const hashTable = new HashTable();
hashTable.put("aaa", 100);
console.log(hashTable.get("aaa"));
hashTable.put("aaa", 200);
hashTable.put("bbb", 300);
hashTable.put("ccc", 666);
console.log(hashTable.get("aaa"));
console.log(hashTable.get("bbb"));
console.log(hashTable.get("ccc"));
console.log(hashTable.get("ddd"));
