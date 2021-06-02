/*
https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let len = s.length
  let ans = ''
  let i = 0
  while (i < len) {
    while (i < len && s[i] === ' ') {
      ans += s[i]
      i++
    }
    let tmp = ''
    while (i < len && s[i] !== ' ') {
      tmp = s[i] + tmp;
      i++
    }
    ans += tmp;
  }

  return ans;
};