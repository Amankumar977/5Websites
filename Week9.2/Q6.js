let a = 10,
  b = 40;
let curry = (a, b, operation) => {
  return operation(a, b);
};
console.log(
  curry(a, b, function add(a, b) {
    return a + b;
  })
);
