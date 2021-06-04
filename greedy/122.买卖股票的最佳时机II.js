/*
https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
// 解法一：双指针
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  let len = prices.length;
  let i = 0,
    j = 1;
  let ans = 0;
  while (j < len) {
    // 抄底
    while (j < len && prices[j] < prices[i]) {
      i++
      j++
    }

    // 高抛
    while (j < len && prices[j] >= prices[j - 1]) {
      j++;
    }

    ans += prices[j - 1] - prices[i]
    // 下个周期
    i = j
    j++
  }

  return ans;
};

// 解法二：贪心算法