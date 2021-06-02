/*
https://leetcode-cn.com/problems/hamming-distance/
位操作/二进制
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 右移操作符
var hammingDistance = function (x, y) {
  let s = x ^ y // 异或获得汉明结果
  let ans = 0
  while (s) {
    ans += s & 1 // 与1做按位与，判断末尾是否为1
    // 右移操作符
    s >>= 1
  }
  return ans
};

// Brian Kernighan 算法
var hammingDistance = function (x, y) {
  let s = x ^ y // 异或获得汉明结果
  let ans = 0
  while (s) {
    s &= s - 1 // 这个操作用来消除1   1000 - 1 = 0001，做与操作，消调了1000中的1
    ans++
  }
  return ans
};