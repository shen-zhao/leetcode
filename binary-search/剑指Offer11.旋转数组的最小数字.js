/*
https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
二分查找
*/
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let l = 0;
  let r = numbers.length;

  while (l < r) {
    let m = (l + r) >>> 1;

    if (numbers[m] > numbers[r]) {
      l = m + 1;
    } else if (numbers[m] < numbers[r]) {
      r = m;
    } else {
      r--;
    }
  }

  return numbers[l];
};