// The Fibonacci Sequence
const fib = (n) => {
  const numbers = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]);
  }
  console.log(numbers);

  return numbers[n];
};
console.log(fib(5));

// Primality Test
const isPrime = (n) => {
  for (let i = 2; i < Math.sqrt(n); i++) {
    console.log("running");
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
console.log("isPrime", isPrime(72277));
console.log("isPrime", isPrime(9));
