/*
https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  var helper = (i, j, k, l) => {
    let rootValue = preorder[i]
    // 创建根节点
    let root = new TreeNode(rootValue)
    // 找到root在中序遍历的下标位置，用这个下标可以计算左右子树节点数量，从而进行分割
    let m = inorder.indexOf(rootValue)

    if (m > k) {
      // 注意这里的第二个参数，是通过数量算出索引
      root.left = helper(i + 1, i + m - k, k, m - 1)
    }
    if (m < l) {
      // 注意这里的第一个参数，是通过数量算出索引
      root.right = helper(i + m - k + 1, j, m + 1, l)
    }

    return root
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1)
};