let frequencyArr = [];
for (let i = 0; i < 10; i++) {
  frequencyArr[i] = 0;
}

let nums1 = [1, 2, 2, 1];
for (let value of nums1) {
  frequencyArr[value] += 1;
}
console.log(frequencyArr);
// let resultArr = [];
// for (let value of nums2) {
//   if (frequencyArr[value] > 0) {
//     resultArr.push(value);
//     frequencyArr[value--];
//   }
// }
