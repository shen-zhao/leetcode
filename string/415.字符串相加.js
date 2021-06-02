/*
https://leetcode-cn.com/problems/add-strings/
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
*/
var addStrings = function (num1, num2) {
  let len = Math.max(num1.length, num2.length);
  // 先对字符串进行填充，使长度相等，目的是为了让数字的相同位对齐
  num1 = num1.padStart(len, '0');
  num2 = num2.padStart(len, '0');
  let ans = '';
  let carry = 0; // 进位

  for (let i = len - 1; i >= 0 || carry; i--) {
    let n1 = num1[i],
      n2 = num2[i];
    let c = ~~n1 + (~~n2) + carry;
    let b = c;
    if (c > 9) {
      b = c % 10;
      carry = 1;
      a
    } else {
      carry = 0;
    }

    ans = b + ans;
  }

  return ans;
};