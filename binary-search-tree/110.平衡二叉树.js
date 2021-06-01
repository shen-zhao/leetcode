/*
https://leetcode-cn.com/problems/balanced-binary-tree/
*/
// 
var isBalanced = function (root) {
  const isBST = (node) => {
    if (node === null) {
      return 0
    }

    let l = isBST(node.left);
    let r = isBST(node.right);
    if (l === -1 || r === -1 || Math.abs(l - r) > 1) {
      return -1;
    }

    return Math.max(l, r) + 1;
  }
  return isBST(root) !== -1;
};