function knapsack(m, pt, wt) {
  const n = pt.length;
  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (wt[i - 1] <= j) {
        dp[i][j] = Math.max(dp[i - 1][j], pt[i - 1] + dp[i - 1][j - wt[i - 1]]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n][m];
}

const pt = [1, 2, 5, 6];
const wt = [2, 3, 4, 5];
const m = 8;

console.log(knapsack(m, pt, wt));
