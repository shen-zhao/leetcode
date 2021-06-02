/*
栈
https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/
esay
*/

var removeDuplicates = function (s) {
  let len = s.length;
  let ans = [];

  for (let i = 0; i < len; i++) {
    let e = s[i];
    if (e === ans[ans.length - 1]) {
      ans.pop();
    } else {
      ans.push(e);
    }
  }


  return ans.join('');
};