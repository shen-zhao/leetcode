/*
https://leetcode-cn.com/problems/diameter-of-binary-tree/
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let ans = 0 // 最长路径节点数
  let dfs = (node) => {
    if (node == null) return 0

    let L = dfs(node.left)
    let R = dfs(node.right)

    ans = Math.max(L + R + 1, ans)

    return Math.max(L, R) + 1
  }

  dfs(root)
  // 节点数转长度需要 - 1
  return ans - 1
};