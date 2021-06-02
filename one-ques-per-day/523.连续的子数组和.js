/*
https://leetcode-cn.com/problems/continuous-subarray-sum/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 暴力解法，超时
var checkSubarraySum = function (nums, k) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    let sum = nums[i]
    for (let j = i + 1; j < len; j++) {
      sum += nums[j]
      if (sum % k === 0) {
        return true
      }
    }
  }

  return false
};

// 前缀和 + 哈希表
// 题解：https://leetcode-cn.com/problems/continuous-subarray-sum/solution/lian-xu-de-zi-shu-zu-he-by-leetcode-solu-rdzi/
var checkSubarraySum = function (nums, k) {
  let len = nums.length
  if (len < 2) return false
  let map = new Map
  map.set(0, -1)
  let sum = 0
  for (let i = 0; i < len; i++) {
    sum += nums[i]
    let v = sum % k
    if (map.has(v)) {
      if ((i - map.get(v)) > 1) {
        return true
      }
    } else {
      map.set(v, i)
    }
  }

  return false
};