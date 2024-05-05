function decimalToBinary(decimal: number) {
  const binaryArr: number[] = [];

  while (decimal > 0) {
    const res = decimal % 2;
    binaryArr.push(res);
    decimal = Math.floor(decimal / 2);
  }
  let binary = "";
  while (binaryArr.length !== 0) {
    binary += binaryArr.pop();
  }
  return binary;
}

const res = decimalToBinary(6);
console.log(res);
