let x = BigInt(7985);
let map = new Map();
let fib = (x) => {
  if (x <= 1n) {
    return x;
  }
  if (map.has(x)) {
    return map.get(x);
  }
  let fibVal = fib(x - 1n) + fib(x - 2n);
  map.set(x, fibVal);
  return fibVal;
};
console.log(fib(x));
