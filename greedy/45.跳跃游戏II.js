/*
https://leetcode-cn.com/problems/jump-game-ii/
官方题解：https://leetcode-cn.com/problems/jump-game-ii/solution/tiao-yue-you-xi-ii-by-leetcode-solution/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 时间 O(n^2) 空间O(1)
var jump = function (nums) {
  let len = nums.length
  let steps = 0
  for (let i = len - 1; i > 0;) {
    for (let j = 0; j < i; j++) {
      if (j + nums[j] >= i) {
        steps++
        i = j
        break
      }
    }
  }

  return steps
};

/***
 * 题解：https://leetcode-cn.com/problems/jump-game-ii/solution/45-by-ikaruga/
 * 本题有个关键条件：假设你总是可以到达数组的最后一个位置。
 * 既然怎么都能跳到最后，那么我们尽量每一步跳的最远
 */
var jump = function(nums) {
  let len = nums.length
  let steps = 0
  let maxPosition = 0
  let end = 0
  for (let i = 0; i < len - 1; i++) {
    maxPosition = Math.max(nums[i] + i, maxPosition)
    if (i === end) {
      end = maxPosition
      steps++
    }
  }
  return steps
};

