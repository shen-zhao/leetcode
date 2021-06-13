/*
https://leetcode-cn.com/problems/first-bad-version/
*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let i = 1,
      j = n
    while (i < j) {
      let m = (i + j) >>> 1 // 防止溢出
      let res = isBadVersion(m)
      if (res) {
        j = m
      } else {
        i = m + 1
      }
    }
    return i
  };
};