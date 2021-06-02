/*
https://leetcode-cn.com/problems/contains-duplicate/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 解法一：备忘录  时间O(n) 空间O(n)
var containsDuplicate = function (nums) {
  let set = new Set
  for (let num of nums) {
    if (set.has(num)) {
      return true
    }
    set.add(num)
  }
  return false
};

// 解法一：sort + 前后对比  时间O(nlogn) 空间O(logn)
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  let prev

  for (let num of nums) {
    if (num === prev) {
      return true
    }
    prev = num
  }

  return false
};