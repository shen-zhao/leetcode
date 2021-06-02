/*
https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
此题特殊之处是需要对结果进行取余
*/
var numWays = function (n) {
  if (n === 0) return 1;
  if (n <= 2) {
    return n;
  }
  let ans = 0;
  let i = 1;
  let j = 2;
  while (n > 2) {
    ans = (i + j) % 1000000007; // 注意：最保险是在这里取余，在最后取余结果可能在之前就溢出了，导致结果不准
    i = j;
    j = ans;
    n--
  }

  return ans;
};