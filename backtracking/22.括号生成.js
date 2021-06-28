/*
https://leetcode-cn.com/problems/generate-parentheses/
*/

/**
 * @param {number} n
 * @return {string[]}
 */
// 暴力递归
// 先求出所有排列组合，再检验有效性
var generateParenthesis = function(n) {
  let result = []
  
  let genAll = (s = '', pos = 0) => {
    if (pos === 2 * n) {
      if (valid(s)) result.push(s)
    } else {
      genAll(s + '(', pos + 1)
      genAll(s + ')', pos + 1)
    }
  }

  let valid = (str) => {
    let b = 0
    for (let i = 0; i < 2 * n; i++) {
      if (str[i] === '(') {
        b++
      } else {
        b--
      }
      if (b < 0) return false
    }

    return b === 0
  }

  genAll()
  return result
};

// 递归 + 回溯
// 生成过程中保证有效性
var generateParenthesis = function(n) {
  let res = []
  let helper = (left, right, str = '') => {
    // 括号用完了，说明已经生成有效的组合了
    if (left === 0 && right === 0) {
      res.push(str)
      return
    }
    // 左侧括号不需要限制
    if (left > 0) {
      helper(left - 1, right, str + '(')
    }
    // 右侧保留的数量必须大于左括号
    if (right > left) {
      helper(left, right - 1, str + ')')
    }
  }
  helper(n, n)

  return res
}