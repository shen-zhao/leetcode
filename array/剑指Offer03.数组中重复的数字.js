// 备忘录
// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 时间 O(n) 空间O(n)
var findRepeatNumber = function (nums) {
  let s = new Set;
  for (let i = 0; i < nums.length; i++) {
    if (s.has(nums[i])) {
      return nums[i];
    }
    s.add(nums[i]);
  }
};

// 时间 O(n) 空间O(1)
// 交换排序
var findRepeatNumber = function (nums) {
  if (nums.length < 1) return false;
  for (let i = 0; i < nums.length; i++) {
    while (i !== nums[i]) {
      if (nums[i] === nums[nums[i]]) {
        return nums[i];
      }
      let tar = nums[i];
      [nums[i], nums[tar]] = [nums[tar], nums[i]];
    }
  }
};