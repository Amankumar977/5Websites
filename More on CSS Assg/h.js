let arr = [3];
let n = arr.length;
let findPivotElement = (arr, n) => {
  if (n == 1) {
    console.log(arr[0]);
  }
  let start = 0;
  let end = n - 1;
  let ans = Number.MAX_VALUE;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > arr[n - 1]) {
      start = mid + 1;
    } else if (arr[mid] <= arr[n - 1]) {
      ans = arr[mid];
      end = mid - 1;
    }
  }
  console.log(ans);
};
findPivotElement(arr, n);
