/*
https://leetcode-cn.com/problems/longest-common-prefix/
*/
// 解法一：纵向扫描  时间 O(mn) 空间O(1)
// 通过索引，比较每个字符串同一索引的值，通过后索引+1，只要出现不同，或最短的字符串遍历完成，即返回结果
var longestCommonPrefix = function (strs) {
  let ans = '';

  for (let i = 0;; i++) {
    let bit = '';
    for (s of strs) {
      if (s[i] == null) {
        return ans;
      }
      if (bit === '') {
        bit = s[i];
        continue;
      }
      if (bit === s[i]) {
        continue;
      }
      return ans;
    }

    ans += bit;
  }
};

// 解法二：横向扫描 时间 O(mn) 空间O(1)
// 两个两个寻找公共前缀，返回结果再与下一项以此类推
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let s1 = strs.pop();
  let s2 = strs.pop();

  const getComPre = (str1, str2) => {
    let r = ''
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        return r;
      }
      r += str1[i];
    }
    return r;
  }

  while (s2 != null) {
    s1 = getComPre(s1, s2);
    s2 = strs.pop();
  }

  return s1;
};