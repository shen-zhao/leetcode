/*
https://leetcode-cn.com/problems/excel-sheet-column-title/
*/

/**
 * @param {number} columnNumber
 * @return {string}
 */
// 转化为十进制转26进制
// 注意区间为[1,26] 而不是 [0,25]
var convertToTitle = function (columnNumber) {
  const baseCode = 'A'.charCodeAt(0)
  let res = ''

  while (columnNumber > 0) {
    let y = (columnNumber - 1) % 26
    res = String.fromCharCode(baseCode + y) + res
    columnNumber = Math.floor((columnNumber - 1) / 26)
  }

  return res
};