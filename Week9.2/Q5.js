let number = -5;
let factorial = (number) => {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number + 1);
};
console.log(factorial(number));
