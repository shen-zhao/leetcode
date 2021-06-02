/*
https://leetcode-cn.com/problems/transpose-matrix/
矩阵
*/
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let rows = matrix[0].length;
  let cols = matrix.length;
  let transposed = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

  for (let y = 0; y < cols; y++) {
    for (let x = 0; x < rows; x++) {
      transposed[x][y] = matrix[y][x];
    }
  }

  return transposed;
};