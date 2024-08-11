const factorial = (number) => {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
};

const fact = (number) => {
  if (number === 1) {
    return 1;
  }
  return number * fact(number - 1);
};
console.log(factorial(3));
console.log(fact(5));
