let arr = [1, 2, 3, 4, 3];
let n = arr.length,
  i = 1,
  j = n - 1;
let helper = (arr, i, j, n) => {
  let dp = Array.from({ length: n }, () => Array(n).fill(-1));
  return minOpr(arr, i, j, dp);
};
let minOpr = (arr, i, j, dp) => {
  if (i === j) {
    return 0;
  }
  if (dp[i][j] !== -1) {
    return dp[i][j];
  }
  let minOper = Number.MAX_VALUE;
  for (let k = i; k < j; k++) {
    let operations =
      minOpr(arr, i, k, dp) +
      minOpr(arr, k + 1, j, dp) +
      arr[i - 1] * arr[k] * arr[j];
    minOper = Math.min(operations, minOper);
  }
  dp[i][j] = minOper;
  return minOper;
};
console.log(helper(arr, i, j, n));
