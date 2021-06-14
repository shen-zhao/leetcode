/*
https://leetcode-cn.com/problems/guess-number-higher-or-lower/

https://leetcode-cn.com/problems/binary-search/solution/er-fen-cha-zhao-xiang-jie-by-labuladong/
*/

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let i = 1,
    j = n
  while (i <= j) {
    let m = (i + j) >>> 1
    let res = guess(m)

    if (res < 0) {
      j = m - 1
    } else if (res > 0) {
      i = m + 1
    } else {
      return m
    }
  }

  return -1
};