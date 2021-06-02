/*
https://leetcode-cn.com/problems/longest-palindromic-substring/
给你一个字符串 s，找到 s 中最长的回文子串。
*/
/**
 * 官方解法没太理解，自己写了一种方法，时间做好应该是O(n)吧，我也不太确定，但是确实执行不是很慢。
 * 思路有点类似于中心扩散，但是官方的中心扩散我没看懂
 * 扩散的思路就是，遍历字符串，当遍历到i时，声明两个变量l,r，分别从i向左右移动，然后判断这两个值是否相等，相当就说明以i为中心回文
 * 如果相等就继续移动，直到遇到不相等或者遇到左右端点是停止，然后判断此时lr之间的字符串是否为最大，
 * 上面说的一种情况是奇数位回文的情况，比如"aba"、"aaa"，如果是偶数回文呢，我这里的做法很简单，判断i和i+1位是否相等，
 * 相等的话就可以尝试把r多向右移动一位，重复与奇数位相同的查找过程
 * 这里我定义了一个工具函数，每遍历到一个索引时，按奇数位回文查找，如果满足s[i] === s[i+1]，则尝试在按偶数回文查找一边，偶数回文包括："abba"、"aaaa"
 * 
 * 总结，其实这个思路有点像滑动窗口的思路，只是需要两个端点同时滑动
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let len = s.length;
  let ans = s[0];

  const tryMax = (l, r, ms) => {
    while (l >= 0 && r < len) {
      if (s[l] === s[r]) {
        ms = s.substring(l, r + 1);
        // 左右滑动
        l--;
        r++;
      } else {
        break;
      }
    }
    ans = ms.length > ans.length ? ms : ans;
  }

  for (let i = 0; i < len; i++) {
    // 声明左右索引
    let l = i - 1,
      r = i + 1;

    // 按照奇数回文查找
    tryMax(l, r, s[i]);

    // 如果满足偶数回文基本条件则在按偶数回文查找一边
    if (s[i] === s[i + 1]) {
      // 注意r需要多移动一位
      tryMax(l, r + 1, s.substring(i, i + 2));
    }
  }

  return ans;
};

// TODO: 动态规划