let number = 89;
let k = 10;
let printMultiples = (number, k) => {
  if (k === 0) {
    return;
  }
  printMultiples(number, k - 1);
  console.log(`${number} x ${k} = ${number * k}`);
};
printMultiples(number, k);
