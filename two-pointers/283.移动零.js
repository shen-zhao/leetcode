/*
https://leetcode-cn.com/problems/move-zeroes/
*/

// 解法一：暴力法，删除所有0，在数组尾部追加
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroNum = 0;

  for (let i = 0; i < nums.length;) {
    if (nums[i] === 0) {
      zeroNum++;
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  let l = nums.length;
  for (let i = 0; i < zeroNum; i++) {
    nums[l + i] = 0;
  }

  return nums;
};

// 解法二：双指针法
// 如果没有没有遇到0，两个指针起头并进，r++分开写是为了好理解
var moveZeroes = function (nums) {
  let l = 0,
    r = 0;
  let len = nums.length;

  while (r < len) {
    if (nums[r] === 0) { // 为0时，跳过，此时nums[l] === 0
      r++;
    } else {
      if (nums[l] !== nums[r]) {
        ;
        [nums[l], nums[r]] = [nums[r], nums[l]];
      }
      l++;
      r++;
    }
  }
};