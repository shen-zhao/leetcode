/*
https://leetcode-cn.com/problems/invert-binary-tree/
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 深度优先遍历
var invertTree = function (root) {
  if (root == null) return root

  let tmp = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(tmp)

  return root
};

// 广度优先遍历
var invertTree = function (root) {
  if (root == null) return root
  let stack = [root]
  let len
  while (len = stack.length) {
    for (let i = 0; i < len; i++) {
      let node = stack.shift()
      let tmp = node.left
      node.left = node.right
      node.right = tmp
      node.left && stack.push(node.left)
      node.right && stack.push(node.right)
    }
  }

  return root
};