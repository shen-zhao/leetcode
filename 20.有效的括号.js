/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2) return false;

  const smap = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] in smap) {
      stack.push(s[i])
    } else {
      const head = stack[stack.length - 1];
      if (s[i] === smap[head]) {
        stack.pop();
      } else {
        return false
      }
    }
  }

  return stack.length === 0
};

// 无map
var isValid = function(s) {
  if (s.length % 2) return false;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i])
    } else {
      const head = stack[stack.length - 1]
      if ((head === '(' && s[i] === ')') || (head === '[' && s[i] === ']') || (head === '{' && s[i] === '}')) {
        stack.pop()
      } else {
          return false
      }
    }
  }

  return stack.length === 0
};
// @lc code=end

