/*
https://leetcode-cn.com/problems/sum-of-left-leaves/
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var isLeafNode = node => !node.left && !node.right
var sumOfLeftLeaves = function (root) {
  let ans = 0
  if (root == null) return ans
  let helper = node => {
    if (node.left && isLeafNode(node.left)) {
      ans += node.left.val
    } else {
      node.left && helper(node.left)
    }
    node.right && helper(node.right)
  }

  helper(root)
  return ans
};