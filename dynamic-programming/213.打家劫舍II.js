/*
https://leetcode-cn.com/problems/house-robber-ii/
题解：https://leetcode-cn.com/problems/house-robber-ii/solution/213-da-jia-jie-she-iidong-tai-gui-hua-jie-gou-hua-/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  } else if (nums.length === 2) {
    return Math.max(nums[0], nums[1])
  }

  let helper = (start, end) => {
    let len = end - start
    if (len === 1) {
      return nums[start]
    }

    let first = nums[start]
    let second = Math.max(nums[start], nums[start + 1])
    for (let i = start + 2; i <= end; i++) {
      let temp = second
      second = Math.max(second, nums[i] + first)
      first = temp
    }

    return second
  }

  return Math.max(helper(0, nums.length - 2), helper(1, nums.length - 1))
};