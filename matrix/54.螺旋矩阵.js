/*
https://leetcode-cn.com/problems/spiral-matrix/
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let ans = []
  let left = 0,
    right = matrix[0].length - 1
  let top = 0,
    bottom = matrix.length - 1
  let nums = matrix[0].length * matrix.length
  while (nums > 0) {
    for (let i = left; i <= right && nums > 0; i++) {
      ans.push(matrix[top][i])
      nums--
    }
    top++
    for (let i = top; i <= bottom && nums > 0; i++) {
      ans.push(matrix[i][right])
      nums--
    }
    right--
    for (let i = right; i >= left && nums > 0; i--) {
      ans.push(matrix[bottom][i])
      nums--
    }
    bottom--
    for (let i = bottom; i >= top && nums > 0; i--) {
      ans.push(matrix[i][left])
      nums--
    }
    left++
  }

  return ans
};