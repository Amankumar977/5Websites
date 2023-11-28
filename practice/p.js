let nums = [1, 2, 2, 4];
let n = nums.length;
let target = 2;
let idx = 0;
let lastIndices = (nums, n, target, idx) => {
  if (idx > n - 1) {
    return -1;
  }
  let ans = lastIndices(nums, n, target, idx + 1);
  if (ans === -1 && nums[idx] == target) {
    ans = idx;
  }
  return ans;
};
console.log(lastIndices(nums, n, target, idx));
