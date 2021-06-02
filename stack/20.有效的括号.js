/*
栈
https://leetcode-cn.com/problems/valid-parentheses/
esay
*/

var isValid = function (s) {
  let len = s.length;
  // 奇数位直接返回false，优化手段
  if (len % 2 === 1) return false;

  let stack = [];
  let map = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  for (let i = 0; i < len; i++) {
    let e = s[i];
    if (map[e]) {
      if (map[e] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(e);
    }
  }

  return stack.length === 0;
};