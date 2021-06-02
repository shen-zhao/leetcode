/*
https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
*/

// 解法一：双指针  时间O(n) 空间O(1)
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i = 0;
  j = numbers.length - 1

  while (i < j) {
    if (numbers[j] + numbers[i] > target) {
      j--
    } else if (numbers[j] + numbers[i] < target) {
      i++
    } else {
      return [i + 1, j + 1]
    }
  }

  return [-1, -1]
};

// 解法三：双指针 + 二分查找   时间O(logn) 空间O(1)
var twoSum = function (numbers, target) {
  let i = 0;
  j = numbers.length - 1

  while (i < j) {
    let m = (i + j) >>> 1
    if (numbers[i] + numbers[m] > target) {
      j = m - 1
    } else if (numbers[m] + numbers[j] < target) {
      i = m + 1
    } else if (numbers[j] + numbers[i] > target) {
      j--
    } else if (numbers[j] + numbers[i] < target) {
      i++
    } else {
      return [i + 1, j + 1]
    }
  }

  return [-1, -1]
};

// 解法三：备忘录   时间O(n) 空间O(n)