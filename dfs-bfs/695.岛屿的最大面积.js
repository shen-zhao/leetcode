/*
https://leetcode-cn.com/problems/max-area-of-island/
优秀题解
https://leetcode-cn.com/problems/number-of-islands/solution/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let m = grid.length
  let n = grid[0].length
  let ans = 0

  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i > m - 1 || j > n - 1 || grid[i][j] === 0) return 0
    grid[i][j] = 0

    return 1 + dfs(i, j + 1) + dfs(i, j - 1) + dfs(i + 1, j) + dfs(i - 1, j)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 遇到 1 开始dfs查询，遍历过的标记为 0
      if (grid[i][j] === 1) {
        ans = Math.max(dfs(i, j), ans)
      }
    }
  }

  return ans
};