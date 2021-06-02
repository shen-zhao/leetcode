/*
https://leetcode-cn.com/problems/palindrome-number/
*/
// 求一半==另一半
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 负数肯定不是回文
  if (x < 0) {
    return false;
  }
  // 非0的个位为0的整数肯定不是回文
  if (x % 10 === 0 && x !== 0) {
    return false;
  }

  let x1 = 0;
  while (x1 < x) {
    let y = x % 10;
    x = Math.floor(x / 10);
    x1 = x1 * 10 + y;
  }

  return x1 === x || Math.floor(x1 / 10) === x;
};