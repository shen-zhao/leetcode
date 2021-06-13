/*
https://leetcode-cn.com/problems/last-stone-weight/
*/

/**
 * @param {number[]} stones
 * @return {number}
 */

// 大顶堆 TODO:

// 排序解法
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b)

  while (stones.length > 1) {
    let y = stones.pop()
    let x = stones.pop()

    let d = y - x

    if (d !== 0) {
      let s = 0,
        e = stones.length
      let index = 0
      while (s < e) {
        let m = (s + e) >> 1
        if (stones[m] > d) {
          index = m
          e = m
        } else if (stones[m] < d) {
          index = m + 1
          s = m + 1
        } else {
          index = m
          break
        }
      }
      stones.splice(index, 0, d)
    }
  }

  return stones[0] || 0
};