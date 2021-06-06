/*
https://leetcode-cn.com/problems/binary-tree-paths/
*/

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// 深度优先遍历
var isLeafNode = node => !node.left && !node.right
var binaryTreePaths = function (root) {
  let ans = []
  if (root == null) return ans
  // 访问记录
  let visitor = []
  let helper = node => {
    // 入栈
    visitor.push(node.val)
    if (isLeafNode(node)) {
      ans.push(visitor.join('->'))
    } else {
      node.left && helper(node.left)
      node.right && helper(node.right)
    }
    // 出栈(回溯)
    visitor.pop()
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