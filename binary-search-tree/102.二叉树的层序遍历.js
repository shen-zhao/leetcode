/*
广度优先搜索
https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
*/
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 解法一：深度优先搜索，记录深度
var levelOrder = function (root) {
  let ans = [];
  dfs(root, ans);

  return ans;
};
var dfs = (node, res, d = 0) => {
  if (node === null) return;
  dfs(node.left, res, d + 1);
  let depthArr = res[d];
  if (depthArr) {
    depthArr.push(node.val);
  } else {
    res[d] = [node.val];
  }
  dfs(node.right, res, d + 1);
}

// 解法二：广度优先搜索
var levelOrder = function (root) {
  let ans = [];
  if (root == null) return ans;
  let queue = [root];
  let len;
  while (len = queue.length) {
    ans.push([]);
    // 此步是关键，一次性把队列中的节点全部消费掉，消费掉的节点就是统一层级的节点
    for (let i = 0; i < len; i++) {
      node = queue.shift();
      ans[ans.length - 1].push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return ans;
};