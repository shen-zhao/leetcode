/*
https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  let ans = []

  let helper = (node) => {
    if (node == null) return
    helper(node.left)
    ans.push(node.val)
    helper(node.right)
  }

  helper(root)

  return ans
};