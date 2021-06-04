/*
https://leetcode-cn.com/problems/continuous-subarray-sum/
凡是能转化成求数组中连续子序列之和的形式，都可以用前缀和来做，连续子序列之和可以转化成子序列开始和结束索引处的前缀和之差来求得
// 官方题解：https://leetcode-cn.com/problems/continuous-subarray-sum/solution/lian-xu-de-zi-shu-zu-he-by-leetcode-solu-rdzi/
本题求连续子序列之和是k的倍数，可以转化为连续子序列开始和结束索引出前缀和对k取余的结果相同，做差后会把余数消除
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

// 前缀和 + 哈希表 + 同余定理
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