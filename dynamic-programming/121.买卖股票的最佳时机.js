/*
https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
*/
// 解法一：暴力解法，超时了。。。
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  let ans = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      ans = Math.max(ans, prices[j] - prices[i]);
    }
  }

  return ans;
};

// 解法二 记录最小值
// 双指针
// 记录最小值min，后面所有大于min的都与min做差，求最大差值，当遇到比min还小的数时，重置min，继续走前面的逻辑
// 就好比认为都这这样的结构  [(3,4,5,6),(2,3,4,5),(1,2,3,4)]，求每个分组的最大差值，在取最大的那个数
var maxProfit = function (prices) {
  let min = Infinity;
  let ans = 0;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    ans = Math.max(ans, prices[i] - min);
  }

  return ans;
};