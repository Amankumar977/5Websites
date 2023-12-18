let arr = [1, 1, 2, 2, 3, 10, 10, 10, 4, 4, 4, 5, 7, 7, 1, 2];
let nonConsecSub = (arr) => {
  let n = arr.length;
  let stack = [];
  let currValue = arr[0];
  stack.push(currValue);
  let currCount = 1;
  for (let i = 1; i < n; i++) {
    if (currValue != arr[i]) {
      currValue = arr[i];
      stack.push(currValue);
      currCount = 1;
    } else if (currCount == 1 && currValue == arr[i]) {
      stack.pop();
      currCount--;
    }
  }
  return stack;
};
console.log(nonConsecSub(arr));
