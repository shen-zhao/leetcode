/*
https://leetcode-cn.com/problems/permutations-ii/

给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let len = nums.length
  let visitor = {}
  let ans = []

  let dfs = (arr = []) => {
    if (arr.length === len) {
      ans.push([...arr])
      return
    }

    let temp = {}

    for (let i = 0; i < len; i++) {
      let num = nums[i]
      if (visitor[i] || temp[num]) {
        continue
      }
      temp[num] = true // dfs每一层遍历时，标记每一位的num重复
      visitor[i] = true // 使用索引标记每一位的使用重复
      arr.push(num)
      dfs(arr)
      arr.pop()
      visitor[i] = false
    }
  }

  dfs()

  return ans
};