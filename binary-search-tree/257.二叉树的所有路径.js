/*
https://leetcode-cn.com/problems/binary-tree-paths/
*/

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// 深度优先遍历
var binaryTreePaths = function (root) {
  let ans = []
  let helper = (node, path = '') => {
    // 空间点直接返回不处理
    if (node == null) {
      return
    }

    path = path ? path + '->' + node.val : node.val + ''
    // 如果没有左节点和右节点，那么该节点就是叶子节点
    if (!node.left && !node.right) {
      ans.push(path)
    }
    helper(node.left, path)
    helper(node.right, path)
  }

  helper(root)

  return ans
};

// 广度优先遍历
var binaryTreePaths = function (root) {
  let ans = []
  if (root == null) return ans

  let stack = [root]
  let pathStack = ['' + root.val]

  while (stack.length) {
    let node = stack.shift()
    let path = pathStack.shift()
    if (!node.left && !node.right) {
      ans.push(path)
    } else {
      if (node.left) {
        stack.push(node.left)
        pathStack.push(path + '->' + node.left.val)
      }
      if (node.right) {
        stack.push(node.right)
        pathStack.push(path + '->' + node.right.val)
      }
    }
  }

  return ans
};