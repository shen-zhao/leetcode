/*
https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
*/
// 大神题解：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/236-er-cha-shu-de-zui-jin-gong-gong-zu-xian-hou-xu/
/*
递归思路：
后续遍历二叉树，为了结果回溯
先在左右子树中查找p、q
分三种情况：
如果为null或者等于p或q，说明已经查到，返回该节点(回溯)
如果左右都查到了，说明当前root节点就是公共节点(回溯)
如果左侧查到了，那么左侧就是公共节点(回溯)
如果右侧吵到了，那么右侧就是公共节点(回溯)
如果发现了最近公共节点，根据上面的逻辑会一直回溯结果
*/
// 后续遍历是关键(回溯)
var lowestCommonAncestor = function(root, p, q) {
  // 匹配p、q
  if (root == null || root === p || root === q) return root;
  // 左子树查找p、q
  let left = lowestCommonAncestor(root.left, p, q)
  // 右子树查找p、q
  let right = lowestCommonAncestor(root.right, p, q)
  // left为null，说明p、q都在右子树
  if (left == null) return right
  // right为null，说明p、q都在左子树
  if (right == null) return left
  // p、q分别在左右子树中
  return root
};