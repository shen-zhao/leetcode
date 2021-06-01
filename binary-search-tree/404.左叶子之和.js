/*
https://leetcode-cn.com/problems/sum-of-left-leaves/
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var isLeafNode = (node) => !node.left && !node.right
var sumOfLeftLeaves = function (root) {
  let ans = 0
  let dfs = (node) => {
    if (node == null) return
    if (node.left) {
      if (isLeafNode(node.left)) {
        ans += node.left.val
      }
    }
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)

  return ans
};