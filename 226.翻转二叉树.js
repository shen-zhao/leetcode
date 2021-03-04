/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
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
/**
 * 递归，自顶向下
 */
var invertTree = function(root) {
  if (root) {
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);
  }

  return root
};

/**
 * 迭代，利用栈或队列保存每一个需要翻转的节点
 */
var invertTree = function(root) {
  let stack = [root];
  let curr;
  while (curr = stack.pop()) {
    const temp = curr.left;
    curr.left = curr.right;
    curr.right = temp;
    curr.left && stack.push(curr.left);
    curr.right && stack.push(curr.right);
  }

  return root
};

// @lc code=end

