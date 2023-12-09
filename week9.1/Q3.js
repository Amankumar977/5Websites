/**
 * Loop are used if you want to do a repetative task at a certain point then you can use loops.
 */
// Types of loop
// 1) For Loop
for (let i = 0; i < 11; i++) {
  console.log(i);
}
// 2) While loop
let i = 0;
while (i < 11) {
  console.log(i);
  i++;
}
// 3) Do while
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 11);
// 4) for of loop
let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}
// 5) For each loop
arr.forEach((e, i, arr) => console.log(e));
