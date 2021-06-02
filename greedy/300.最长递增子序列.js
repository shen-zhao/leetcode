/*
https://leetcode-cn.com/problems/longest-increasing-subsequence/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 解法一：贪心 + 二分查找
// 详解：https://github.com/ascoders/weekly/blob/master/%E5%89%8D%E6%B2%BF%E6%8A%80%E6%9C%AF/192.%E7%B2%BE%E8%AF%BB%E3%80%8ADOM%20diff%20%E6%9C%80%E9%95%BF%E4%B8%8A%E5%8D%87%E5%AD%90%E5%BA%8F%E5%88%97%E3%80%8B.md
var lengthOfLIS = function (nums) {
  let len = nums.length
  let ans = [nums[0]]

  for (let i = 1; i < len; i++) {
    // 保证ans为单调递增
    if (nums[i] > ans[ans.length - 1]) {
      ans.push(nums[i])
    } else {
      // 如果遇到比当前ans中最大值小的数，则替换掉比当前值大的最小值
      let l = 0,
        r = ans.length - 1
      while (l < r) {
        let m = (l + r) >>> 1
        if (ans[m] > nums[i]) {
          r = m
        } else if (ans[m] < nums[i]) {
          l = m + 1
        } else {
          l = m
          break;
        }
      }
      ans[l] = nums[i]
    }
  }

  // 长度正确，但是ans结果可能是错误的
  return ans.length
};

// 动态规划 时间O(n ^ 2)
var lengthOfLIS = function (nums) {
  let len = nums.length
  let dp = [];
  let ans = 0;

  for (let i = 0; i < len; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    ans = Math.max(ans, dp[i]);
  }

  return ans;
}