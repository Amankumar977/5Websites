let arr = [1, 2, 3, 4];
var reduce = function (nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
    console.log(init);
  }
  return init;
};
let fn = (accu, curr) => {
  return accu + curr;
};
console.log(reduce(arr, fn, 0));
