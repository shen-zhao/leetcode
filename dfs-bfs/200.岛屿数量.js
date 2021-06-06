/*
https://leetcode-cn.com/problems/number-of-islands/
优秀题解
https://leetcode-cn.com/problems/number-of-islands/solution/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/
dfs/bfs
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
// 深度优先遍历
// 核心思路：当遇到 1 时，根据当前坐标进行dfs遍历，把当前坐标标记为 0 (防止死循环)，然后从四个方向延伸进行递归操作
// 因为每次完成递归操作时，其实就遍历了一个小岛，并且把小岛变过的小岛都标记为 0 了，接下来重复整个过程，进行多少次 dfs查询，最后就是几个岛屿
var numIslands = function (grid) {
  let ans = 0
  let m = grid.length,
    n = grid[0].length

  let dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === '0') return
    grid[i][j] = '0'
    dfs(i, j - 1)
    dfs(i, j + 1)
    dfs(i - 1, j)
    dfs(i + 1, j)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j)
        ans++
      }
    }
  }

  return ans
};