/*
https://leetcode-cn.com/problems/length-of-last-word/
*/

/**
 * @param {string} s
 * @return {number}
 */
// 解法一：倒叙遍历 时间O(n) 空间O(1)
var lengthOfLastWord = function (s) {
  let end = s.length - 1
  while (end >= 0 && s[end] === ' ') end--
  let start = end
  while (start >= 0 && s[start] !== ' ') start--
  return end - start
};

// 解法二：抖机灵正则写法
var lengthOfLastWord = function (s) {
  s = s.trim()
  let res = /.+\s([a-zA-Z]+$)/.exec(s)
  if (res && res[1]) return res[1].length
  return s.replace(/\s/g, '').length
};