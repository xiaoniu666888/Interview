function isPrime(num: number): boolean {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
export {}
