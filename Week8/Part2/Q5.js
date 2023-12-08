let principal = 200000;
let rate = 70;
let time = 1;
function simpleInterest(principal, rate, time) {
  return Math.floor((principal * rate * time) / 100);
}
console.log(simpleInterest(principal, rate, time));
