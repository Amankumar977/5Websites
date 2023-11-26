let number = 6;
let fibonnaciSeries = (number) => {
  if (number === 0 || number === 1) {
    return number;
  }
  return fibonnaciSeries(number - 1) + fibonnaciSeries(number - 2);
};
console.log(fibonnaciSeries(number));
