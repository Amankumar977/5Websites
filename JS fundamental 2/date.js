let nums = [555, 901, 482, 1771];
let n = nums.length;
let count = 0;
for (let i = 0; i < n; i++) {
  let splitedArray = nums[i].toString();
  if (splitedArray.length % 2 == 0) {
    count++;
  }
}
console.log(count);
