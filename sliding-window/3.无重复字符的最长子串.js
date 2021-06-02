/*
滑动窗口 + 备忘录
https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
*/

// 解法一，暴力备忘录法  时间复杂度O(n^2) 空间复杂度O(n)
var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0;
  }
  let st = new Set;
  let maxLen = 1;

  for (let i = 0; i < s.length; i++) {
    st.clear();
    st.add(s[i]);
    for (let j = i + 1; j < s.length; j++) {
      if (st.has(s[j])) {
        break;
      } else {
        st.add(s[j]);
      }
    }
    if (st.size > maxLen) {
      maxLen = st.size;
    }
  }

  return maxLen;
};

/**
 * 滑动窗口 + 备忘录
 * 滑动窗口指定两个端，两个端开始在一个起点，其中i是正常遍历的索引，也是滑动窗口的左端，r是滑动窗口的右断点，
 * 正常遍历i，每次遍历，我们都会让r端点在备忘录里查找是否有重复元素，如果没有重复元素，r就一直往下走，r的动作就类似在滑动，直到遇到重复的元素停止滑动，
 * 然后我们可记录在左端点为i时的最长无重复子串，然后下一步我们需要进行下一次遍历，i变成了i+i，也就是我们的左端点向前移动了一位，
 * 后面需要进行下一次窗口滑动，滑动之前我们需要在备忘录里删除上一个索引的值，因为上一个值可能就是r遇到的重复的元素，不过只是可能，不一定就是，但是我们不用担心
 * 如果重复的元素没有被删除，那么在本次遍历中r也是无法滑动的，接着跳到下次循环，知道重复的元素被推出备忘录有，r才能继续滑动。
 * 那么可能会有一个疑问，r没有滑动，那么我们还需要计算窗口的长度呢？其实按理说不需要计算了，但是我们无法区分本次有没有滑动，那么我们就直接求值在于当前结果对比即可
 */
var lengthOfLongestSubstring = function (s) {
  let len = s.length;
  let se = new Set; // 查重备忘录
  let ans = 0; // 结果

  let r = 0; // 右端点

  // i相当于左端点
  for (let i = 0; i < len; i++) {
    if (i !== 0) {
      // 每次左端点i向右移动时，从备忘录中删除上一个元素，当然i = 0是无需删除
      se.delete(s.charAt(i - 1));
    }
    // 左端点不变，尝试向右滑动右端点
    // 条件1：小于字符串总长度  条件2：在备忘录里无重复元素，否则就停止滑动
    while (r < len && !se.has(s.charAt(r))) {
      // 把最新的右端点添加到备忘录中
      se.add(s.charAt(r));
      // 向右接着滑
      r++;
    }
    // 判断当前窗口大小是否为最大值
    ans = Math.max(ans, r - i)
  }

  return ans;
};

// 解法三，不知道为啥indexOf就很快，而且不需要备忘录，时间复杂度O(n^2) 空间复杂度O(1)
var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0;
  }

  let ans = 1;

  // !!!注意，j判断条件一定要大于最大索引，及包含==s.length
  // 因为substring结果不包含第二个索引参数，所以一定要超过最大索引才能统计到最后一个元素
  for (let i = 0, j = 0; j <= s.length; j++) {
    let str = s.substring(i, j);
    let index;
    if ((index = str.indexOf(s.charAt(j))) > -1) {
      i += index + 1;
    }
    ans = Math.max(ans, str.length);
  }

  return ans;
};