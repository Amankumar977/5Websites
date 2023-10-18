let x = BigInt(7985);

let fib = (x) => {
  let first = BigInt(0);
  let second = BigInt(1);
  for (let i = BigInt(2); i <= x; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};
console.log(fib(x).toString());
