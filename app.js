// const sum = ([a, b, c]) => {
//   return a + b + c;
// };
// sum([1, 3, 4]);

// numbers = [1, 3, 4, 34]
const sumArray = (numbers) => {
  let result = 0; // 1
  for (const number of numbers) {
    result += number; //4 => n
  }
  return result; // 1
};
// T = 1 + 1 + 1 + n = 3 + n = 3 + 1*n
// T = 1*n
// T = n => 0*(n) => Linear Time Complexity
console.log(sumArray([1, 3, 4, 34]));

start = performance.now();
sumArray([10000, 3838, 3878]);
end = performance.now();
end - start;

const sumNumber = (numbers) => {
  return numbers.reduce((sum, curNum) => sum + curNum, 0);
};

console.log(sumNumber([1, 3, 4, 6]));
