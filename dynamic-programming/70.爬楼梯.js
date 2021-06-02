/*
https://leetcode-cn.com/problems/climbing-stairs/
*/
/**
 * 动态规划
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }
  let ans = 0;
  let i = 1;
  let j = 2;
  while (n > 2) {
    ans = i + j;
    i = j;
    j = ans;
    n--
  }

  return ans;
};