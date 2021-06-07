/*
https://leetcode-cn.com/problems/target-sum/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let len = nums.length
  let ans = 0
  let helper = (i, sum) => {
    if (i === len) {
      if (sum === target) {
        ans++
      }
    } else {
      helper(i + 1, sum + nums[i])
      helper(i + 1, sum - nums[i])
    }
  }

  helper(0, 0)
  return ans
};

// 动态规划解法参考题解
// https://leetcode-cn.com/problems/target-sum/solution/mu-biao-he-by-leetcode-solution-o0cp/