/*
https://leetcode-cn.com/problems/path-sum-ii/
*/
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var isLeafNode = (node) => !node.left && !node.right
var pathSum = function (root, targetSum) {
  let ans = []
  if (root == null) return ans

  let dfs = (node, arr = []) => {
    arr.push(node.val)
    if (isLeafNode(node)) {
      if (targetSum === arr.reduce((a, b) => a + b)) {
        ans.push(arr)
      }
    } else {
      node.left && dfs(node.left, arr.slice())
      node.right && dfs(node.right, arr.slice())
    }
  }

  dfs(root)

  return ans
};

// 优化版，公用一个数组，妙用回溯
var pathSum = function (root, targetSum) {
  let ans = []
  let visiter = []
  if (root == null) return ans

  let dfs = (node, sum = 0) => {
    sum += node.val
    // 入栈
    visiter.push(node.val)
    if (isLeafNode(node)) {
      if (targetSum === sum) {
        ans.push(visiter.slice())
      }
    } else {
      node.left && dfs(node.left, sum)
      node.right && dfs(node.right, sum)
    }
    // 出栈(回溯)
    visiter.pop()
  }

  dfs(root)

  return ans
};