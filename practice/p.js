let arr = [1, 5, 3, 2, 1, 6, 3, 4];
let greaterElement = (arr, n) => {
  let stack = [];
  let res = new Array(n);
  res.fill(-1, 0);
  stack.push(0);
  for (let i = 1; i < n; i++) {
    let value = arr[i];
    while (stack.length !== 0 && value >= arr[stack[stack.length - 1]]) {
      res[stack.pop()] = value;
    }
    stack.push(i);
  }
  return res;
};
console.log(greaterElement(arr, arr.length));
