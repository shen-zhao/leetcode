/*
数学
https://leetcode-cn.com/problems/pascals-triangle/
*/

// 个人解法 时间O(n^2) 空间O(n)
var generate = function (numRows) {
  if (numRows <= 0) return [];
  let ans = [];
  let prev = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      ans.push([1]);
      continue;
    }

    let j = 0;
    let arr = [];
    while (j + 1 < prev.length) {
      arr.push(prev[j] + prev[j + 1])
      j++;
    }
    arr = [1].concat(arr, [1]);
    ans.push(arr);
    prev = arr;
  }

  return ans;
};

// 官方解法
var generate = function (numRows) {
  let ans = [];

  for (let i = 0; i < numRows; i++) {
    let row = Array(i + 1).fill(1);

    // row[j] = prevRow[j - 1] + prevRow[j]
    for (let j = 1; j < i; j++) {
      row[j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }

    ans.push(row);
  }

  return ans;
};