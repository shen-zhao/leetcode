/*
https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
// 比较中位数和下一位，判断是升还是降来选择边界
var peakIndexInMountainArray = function (arr) {
  let i = 0,
    j = arr.length - 2
  let ans = -1

  // [i, j]
  // 终止条件 i === j + 1
  while (i <= j) {
    let m = (i + j) >>> 1

    if (arr[m] < arr[m + 1]) {
      ans = m + 1
      i = m + 1
    } else(
      j = m - 1
    )
  }

  return ans
};