/*
https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
var inorderTraversal = function (root) {
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

// 迭代
var inorderTraversal = function (root) {
  let ans = []
  let stack = []

  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    ans.push(root.val)
    root = root.right
  }

  return ans
};