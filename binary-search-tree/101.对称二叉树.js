/*
https://leetcode-cn.com/problems/symmetric-tree/
对称二叉树又叫镜像二叉树，左右节点值相等，
且左右节点的孩子：
	左节点的左孩子与右节点的右孩子对称
	左节点的右孩子与右节点的左孩子对称
*/
// 解法一： 迭代
var isSymmetric = function (root) {
  if (root == null) return true;

  let queue = [];
  queue.push(root.left);
  queue.push(root.right);

  while (queue.length) {
    let a = queue.shift();
    let b = queue.shift();

    if (!a && !b) {
      continue;
    }
    if ((!a || !b) || a.val !== b.val) {
      return false;
    }

    queue.push(a.left);
    queue.push(b.right);

    queue.push(a.right);
    queue.push(b.left);
  }

  return true;
};

// 递归
var isSymmetric = function (root) {
  if (root == null) return true;

  const check = (l, r) => {
    if (!l && !r) {
      return true;
    }
    if (!l || !r) {
      return false;
    }

    return l.val === r.val && check(l.left, r.right) && check(l.right, r.left);
  }

  return check(root.left, root.right);
};