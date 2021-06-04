/*
https://leetcode-cn.com/problems/contiguous-array/
凡是能转化成求数组中连续子序列之和的形式，都可以用前缀和来做，连续子序列之和可以转化成子序列开始索引处的前缀和之差来求得
官方题解：https://leetcode-cn.com/problems/contiguous-array/solution/lian-xu-shu-zu-by-leetcode-solution-mvnm/
本题可以把0当成-1，题意也就可以转化为求连续子序列之和为0，就可以用前缀和来实现
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力解法 超时
var findMaxLength = function(nums) {
  let len = nums.length
  let maxLen = 0
  let start = 0
  for (let i = 0; i < len; i++) {
    let sum = 0
    let j
    let e = i
    for (j = i; j < len - 1; j += 2) {
      sum += nums[j] + nums[j + 1]
      if (((j + 1 - i + 1) >> 1) === sum) {
        e = j + 1
      }
    }
    if (e - i > maxLen) {
      start = i
      maxLen = e - i + 1
    }
  }

  return maxLen
};

// 前缀和 + 哈希表
var findMaxLength = function(nums) {
  let len = nums.length
  let map = new Map
  let counter = 0
  let maxLen = 0
  map.set(counter, -1)

  for (let i = 0; i < len; i++) {
    if (nums[i] === 1) {
      counter++
    } else {
      counter--
    }
    if (map.has(counter)) {
      maxLen = Math.max(maxLen, i - map.get(counter))
    } else {
      map.set(counter, i)
    }
  }

  return maxLen
};
