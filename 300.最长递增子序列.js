/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 动态规划
 * dp中存储以每一位为结束的序列的最大递增序列长度
 * 动态转移方程 当j < i时 且满足 nums[i] > nums[j], 那么dp[i] = dp[j] + 1
 * 时间复杂度 O(n^2)
 * 注意点，转移时，转移dp[j]找最大值
 */
var lengthOfLIS = function(nums) {
  const dp = []
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]); // ****
      }
    }
    max = Math.max(dp[i], max)
  }

  return max;
};

/**
 * 贪心法 + 二分查找
 * dp中存储一个长度的递增子序列的最后一个值，且这个值尽量的小，dp保持单调性
 * 如果当前值为val，当前长度为l，如果如果val > dp[l], 那么dp[l + 1] = val，否则通过二分查找相应的位置，然后更新相应长度的最后一个值
 */
var lengthOfLIS = function(nums) {
  if (nums.length === 0) return 0;
  let l = 1;
  let dp = [];
  dp[l] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > dp[l]) {
      dp[++l] = nums[i]
    } else {
      let s = 1;
      let e = l;
      let p = 0;
      while (s <= e) {
        let m = (s + e) >> 1;
        if (nums[i] > dp[l]) { // 找到一个比nums[i]小的即长度最小值，那么后面将更新下一个长度的最后一个值
          s = m + 1;
          p = m;
        } else {
          e = m - 1;
        }
      }
      dp[p + 1] = nums[i];
    }
  }

  return l;
};

// @lc code=end

