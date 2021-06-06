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
var isLeafNode = (node) => !node.left && !node.right
var pathSum = function(root, targetSum) {
  let ans = []
  if (root == null) return ans
  let visitor = []

  let helper = node => {
    // 入栈
    visitor.push(node.val)
    if (isLeafNode(node)) {
      if (visitor.reduce((a, b) => a + b) === targetSum) {
        ans.push(visitor.slice())
      }
    } else {
      node.left && helper(node.left)
      node.right && helper(node.right)
    }
    // 出栈(回溯)
    visitor.pop()
  }

  helper(root)
  return ans
};