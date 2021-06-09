/*
https://leetcode-cn.com/problems/coin-change/
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/*
动态转移方程(i为总金额, fn为i总金额下最小硬币个数) fn(i) = min(fn(i), fn(i - coins[j]) + 1)
*/
var coinChange = function (coins, amount) {
  let len = coins.length
  let dp = Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 1; i < amount + 1; i++) {
    for (let j = 0; j < len; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount]
};