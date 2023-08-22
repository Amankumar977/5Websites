let dollars = [7, 8, 9];
let convertIntoInr = () => {
  const convertedAmounts = dollars.map((elem) => elem * 80);
  return convertedAmounts;
};

const convertedAmounts = convertIntoInr();
console.log(convertedAmounts);
