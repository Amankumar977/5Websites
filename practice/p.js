let a = 12;
let b = 6;
let gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  let reminder = a % b;
  return gcd(b, reminder);
};
let hcf = gcd(a, b);
let lcm = (a * b) / hcf;
console.log(lcm);
