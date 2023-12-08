let weight = 50;
let height = 5.1;
let bmi = (weight, height) => {
  return Math.floor(weight / (height * height));
};
console.log(bmi(weight, height));
