/*
https://leetcode-cn.com/problems/ones-and-zeroes/
官方题解：https://leetcode-cn.com/problems/ones-and-zeroes/solution/yi-he-ling-by-leetcode-solution-u2z2/
*/

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// https://leetcode-cn.com/problems/ones-and-zeroes/solution/dong-tai-gui-hua-zhuan-huan-wei-0-1-bei-bao-wen-ti/
var findMaxForm = function (strs, m, n) {
  let len = strs.length
  let dp = Array.from(Array(len + 1), () => Array.from(Array(m + 1), () => Array(n + 1).fill(0)))

  for (let i = 1; i <= len; i++) {
    let [zeros, ones] = getCount(strs[i - 1])
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        dp[i][j][k] = dp[i - 1][j][k]
        if (j >= zeros && k >= ones) {
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - zeros][k - ones] + 1)
        }
      }
    }
  }

  return dp[len][m][n]
};

var getCount = function (str) {
  let len = str.length
  let count = [0, 0]
  for (let i = 0; i < len; i++) {
    count[str[i] - 0]++
  }
  return count
}