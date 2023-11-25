let nums = [1, 3, 4, 2, 2];
let n = nums.length;
for (let i = 0; i < n; i++) {
  let idx = nums[i] - 1;
  if (nums[idx] < 0) {
    return nums[i];
  } else {
    nums[idx] = -nums[idx];
  }
}
console.log(nums);
