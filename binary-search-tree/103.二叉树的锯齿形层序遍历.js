/*
https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let ans = []
  if (root == null) return ans
  let queue = [root]
  let len
  let flag = false
  while (len = queue.length) {
    let level = []
    flag = !flag

    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      level.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    ans.push(flag ? level : level.reverse())
  }

  return ans
};