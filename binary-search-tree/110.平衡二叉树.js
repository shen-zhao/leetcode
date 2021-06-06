/*
https://leetcode-cn.com/problems/balanced-binary-tree/
*/
// 
var isBalanced = function(root) {
  let isBST = node => {
    if (node == null) return 0
    let leftHeight = isBST(node.left)
    let rightHeight = isBST(node.right)
    if (
      leftHeight === -1
      || rightHeight === -1
      || Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1
    }
    return Math.max(leftHeight, rightHeight) + 1
  }

  return isBST(root) !== -1
};