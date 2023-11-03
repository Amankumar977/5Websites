let arr = [1, 2, 2, 9, 3, 2];
let leftSum = 0;
let totalSum = 0;
let equilibriumIndex = -1;
let n = arr.length;
for (let i = 0; i < n; i++) {
  totalSum += arr[i];
}
for (let i = 0; i < n; i++) {
  totalSum -= arr[i];
  if (leftSum === totalSum) {
    equilibriumIndex = i;
    break;
  }
  leftSum += arr[i];
}
console.log(equilibriumIndex + 1);
