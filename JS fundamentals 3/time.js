let gcd = (a, b) => {
  while (b !== 0) {
    let reminder = a % b;
    a = b;
    b = reminder;
  }
  return a;
};
let num1 = 40;
let num2 = 15;
let gcdValue = gcd(num1, num2);
let lcmValue = (num1 * num2) / gcdValue;
console.log(lcmValue);
