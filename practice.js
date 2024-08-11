const oddOrEvenNumber = (number) => {
  console.log("running");
  return number % 2 === 0;
};
console.log(oddOrEvenNumber(3));

const getMin = (numbers) => {
  let currentMin = numbers[0];
  for (const number of numbers) {
    if (number < currentMin) {
      currentMin = number;
    }
  }
  return currentMin;
};

console.log("arrayOfNumbers", getMin([65, 3, 4, 7, 39, 1, 49]));

// const isPowerOfTwo = (number) => {
//   if (number < 1) {
//     return false;
//   }
//   let dividedNumber = number;
//   while (dividedNumber !== 1) {
//     if (dividedNumber % 2 !== 0) {
//       return false;
//     }
//     dividedNumber = dividedNumber / 2;
//   }
//   return true;
// };

const isPowerOfTwo = (number) => {
  if (number < 1) {
    return false;
  }
  return (number & (number - 1)) === 0;
};

console.log("isPowerOfTwo", isPowerOfTwo(16));
