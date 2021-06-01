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
// 深度优先遍历，前序遍历
var invertTree = function (root) {
  if (root != null) {
    let tmp = root.left
    root.left = root.right
    root.right = tmp

    invertTree(root.left)
    invertTree(root.right)
  }

  return root
};

// 广度优先遍历
var invertTree = function (root) {
  if (root == null) return root;
  let stack = [root];
  let len;

  while (len = stack.length) {
    for (let i = 0; i < len; i++) {
      let node = stack.shift();
      let tmp = node.right;
      node.right = node.left;
      node.left = tmp;
      node.right && stack.push(node.right);
      node.left && stack.push(node.left);
    }
  }

  return root;
};