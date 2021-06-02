/**
 * 深度优先遍历 + 回溯
 * https://leetcode-cn.com/problems/permutations/
 * middle
 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 深度优先遍历 + 回溯 + 标记 时间(O(n!))
var permute = function (nums) {
  let res = [];
  let len = nums.length;
  let visited = {}; // 记录访问

  const dfs = (item) => {
    if (item.length === len) { // 长度满足
      res.push([...item]); // 注意数组需要拷贝一下
    }

    for (let i = 0; i < len; i++) {
      if (visited[nums[i]]) { // 如果正在被访问则跳过
        continue;
      }
      visited[nums[i]] = true; // 标记该元素正在访问
      item.push(nums[i]); // 添加该元素
      dfs(item); // 继续深度遍历
      visited[nums[i]] = false; // 取消标记访问
      item.pop(); // 数组回溯
    }
  }

  dfs([])

  return res;
};