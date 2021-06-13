/*
https://leetcode-cn.com/problems/house-robber/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var rob = function (nums) {
  let len = nums.length
  let dp = [nums[0]]

  for (let i = 1; i < len; i++) {
    if (i < 2) {
      dp[i] = Math.max(nums[i], dp[i - 1])
    } else {
      dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }
  }

  return dp[len - 1]
};

// 动态规划优化
// 每间房屋的最高总金额只和该房屋的前两间房屋的最高总金额相关，因此可以使用滚动数组，在每个时刻只需要存储前两间房屋的最高总金额。
var rob = function (nums) {
  let len = nums.length
  if (len === 1) {
    return nums[0]
  }
  let first = nums[0]
  let second = Math.max(nums[0], nums[1])

  for (let i = 2; i < len; i++) {
    let temp = second
    second = Math.max(second, nums[i] + first)
    first = temp
  }

  return second
};