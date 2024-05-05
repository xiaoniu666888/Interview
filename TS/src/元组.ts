let a: [number] = [1];
let b: [string, string, number] = ["malcolm", "gladwell", 1963];
// b = ["queen", "elizabeth", 1967,'sss'];
// 不能将类型“[string, string, number, string]”分配给类型“[string, string, number]”。
//   源具有 4 个元素，但目标仅允许 3 个。ts(2322)

// 元组也支持可选的元素。与在对象中的类型一样, ?表示"可选":

// 火车票价数组, 不同的方向价格不同
let trainFares: [number, number?][] = [[3.72], [312.32], [321.312]]; // [number, (number | undefined)?][]

// 上边等价于：
let moreTrainFares: ([number] | [number, number])[] = [
  [3.72],
  [312.32],
  [321.312],
  [321.312],
];

// 元组也支持剩余元素，即为元组定义最小长度：

// 字符串列表，至少有一个元素
let friends: [string, ...string[]] = ["a", "b", "c", "d", "e", "f"];

// 元素类型不同的列表
let list: [number, boolean, ...string[]] = [1, false, "a", "b", "c"];
list.push(111);
console.log(list);

let list2: readonly [number, boolean, ...string[]] = [1, false, "a", "b", "c"];
// list2.push(111);  // 类型“readonly [number, boolean, ...string[]]”上不存在属性“push”。

let list3: readonly number[] = [1, 2, 3];
let list5: readonly number[] = list3.concat(4);
let three = list5[2];

// list3[2] = 666 // 类型“readonly number[]”中的索引签名仅允许读取

// 注解类型还能使用Array。类似地，声明只读数组和原数组，也可以使用长格式句法：

type A = readonly string[];
type B = ReadonlyArray<string>;
type C = Readonly<string[]>;

type D = readonly [number, string];
type E = Readonly<[number, string]>;

// 使用什么全凭个人喜好

export {};
