/*
备忘录、循环
https://leetcode-cn.com/problems/two-sum/
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。
*/

// 解法1
// 暴力枚举，时间复杂度O(n^2)，空间复杂度O(1)
// ...双层循环
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// 解法2
// 备忘录
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map.has(target - num)) {
      return [map.get(target - num), i];
    }
    map.set(num, i);
  }
};