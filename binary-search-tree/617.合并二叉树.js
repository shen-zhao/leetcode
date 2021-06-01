/*
https://leetcode-cn.com/problems/merge-two-binary-trees/
*/

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// 解法一：深度优先遍历  时间 O(min(m, n)) 空间 O(min(m, n))
var mergeTrees = function (root1, root2) {
  if (root1 == null) return root2
  if (root2 == null) return root1

  let merged = new TreeNode(root1.val + root2.val)

  merged.left = mergeTrees(root1.left, root2.left)
  merged.right = mergeTrees(root1.right, root2.right)

  return merged
};