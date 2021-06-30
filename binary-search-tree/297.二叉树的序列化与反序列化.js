/*
https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

// 前序遍历
var serialize = function (root) {
  let ans = ''

  let helper = (node) => {
    if (node) {
      ans += node.val + ','
      helper(node.left)
      helper(node.right)
    } else {
      ans += 'null' + ','
    }
  }

  helper(root)

  return ans.substring(0, ans.length - 1)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  data = data.split(',')
  let root = null
  let index = 0
  let helper = () => {
    let nodeVal = data[index++]
    if (nodeVal == 'null') {
      return null
    }
    let node = new TreeNode(nodeVal)

    if (root == null) {
      root = node
    }

    node.left = helper()
    node.right = helper()

    return node
  }

  helper()

  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */