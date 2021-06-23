/*
https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// n & (n - 1) 会消除掉最低位的 1
var hammingWeight = function (n) {
  let count = 0
  while (n !== 0) {
    n = n & (n - 1)
    count++
  }

  return count
};