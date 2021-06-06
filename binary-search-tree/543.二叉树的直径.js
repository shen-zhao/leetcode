/*
https://leetcode-cn.com/problems/diameter-of-binary-tree/
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let ans = 0
  let helper = node => {
    if (node == null) return 0
    let LH = helper(node.left)
    let RH = helper(node.right)

    ans = Math.max(LH + RH + 1, ans)
    return Math.max(LH, RH) + 1
  }

  helper(root)
  // 节点数转长度需要 - 1
  return ans - 1
};