let income = 10000;
let income1 = 100000;
let income2 = 10000000;
let income3 = 1000000000;
function calculateTax(income) {
  let taxRateForThou = 5;
  let taxRateForLakh = 10;
  let taxrateForCr = 15;
  return function () {
    if (income > 0 && income <= 10000) {
      return Math.floor(income / 100) * taxRateForThou;
    } else if (income <= 10000 && income >= 100000) {
      return Math.floor(income / 100) * taxRateForLakh;
    } else {
      return Math.floor(income / 100) * taxrateForCr;
    }
  };
}
console.log(calculateTax(income)());
console.log(calculateTax(income1)());
console.log(calculateTax(income2)());
console.log(calculateTax(income3)());
