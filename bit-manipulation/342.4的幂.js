/*
https://leetcode-cn.com/problems/power-of-four/
*/
/**
 * @param {number} n
 * @return {boolean}
 */
// 暴力循环
var isPowerOfFour = function (n) {
  let v = 1
  while (v < n) {
    v *= 4
  }
  return v === n
};

// 位操作
var isPowerOfFour = function (n) {
  return n > 0 && (-n & n) === n && (n & 0xaaaaaaaa) === 0
};

// 位操作 + 余数
var isPowerOfFour = function (n) {
  return n > 0 && (-n & n) === n && n % 3 === 1
};