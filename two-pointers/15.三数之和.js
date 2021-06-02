/*
双指针
https://leetcode-cn.com/problems/3sum/
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  let n = nums.length;
  if (n < 3) {
    return res;
  }
  // 排序是后续去重的基础
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    // 排序后，如果第一个值已经大于0，那么后续没有遍历的必要了，直接返回
    if (nums[i] > 0) {
      return res;
    }
    // 第一个数如果有重复，跳过，也是基于排序判断的
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // 双指针，使用双指针的条件也是因为排序，如果没有排序，无法使用双指针，只有排序了之后才能确定指针移动的确定性
    let l = i + 1;
    let r = n - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r]
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        // 排序后重复的项跳过
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (sum > 0) {
        r--;
      } else {
        l++;
      }
    }
  }

  return res;
};