/*
https://leetcode-cn.com/problems/maximum-subarray/
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
*/

// 解法一: 暴力解法，两次循环，时间 O(n^2) 空间O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
};

// 解法二  动态规划
// 动态转移方程： f(i) = max(f(i - 1) + num, num)
var maxSubArray = function (nums) {
  let ans = nums[0]
  let sum = 0
  for (let num of nums) {
    // 如果和大于0，继续加
    if (sum > 0) {
      sum += num
    } else {
      sum = num // 如果小于=0，则重置sum
    }
    // 比较本次遍历后的和与ans对比
    ans = Math.max(ans, sum);
  }

  return ans;
};

// 解法三  动态规划
// 动态转移方程： f(i) = max(f(i - 1) + num, num)
var maxSubArray = function (nums) {
  let ans = nums[0]
  let prev = 0
  for (num of nums) {
    prev = Math.max(prev + num, num);
    ans = Math.max(ans, prev);
  }

  return ans;
};