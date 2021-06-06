/*
https://leetcode-cn.com/problems/merge-intervals/
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let ans = [intervals[0]]
  let len = intervals.length
  let i = 1
  while (i < len) {
    let q1 = ans[ans.length - 1]
    let q2 = intervals[i]
    // 排序后如果前一个尾部和后一个头部没有重叠，那么两个区间就没有重叠
    if (q2[0] > q1[1]) {
      ans.push(q2)
    } else {
      ans[ans.length - 1] = [q1[0], Math.max(q1[1], q2[1])]
    }
    i++
  }

  return ans
};