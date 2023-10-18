let s1 = "AGGTAYB";
let s2 = "AGTXAYB";
let m = s1.length;
let n = s1.length;
let lcsTabu = (s1, s2, m, n) => {
  let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = 0;
      } else if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
};

console.log(lcsTabu(s1, s2, m, n));
