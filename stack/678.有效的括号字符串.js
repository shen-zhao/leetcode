// 栈 + 贪心
// https://leetcode-cn.com/problems/valid-parenthesis-string/
// 中级难度
/*
 * 贪心算法
 * inspire: https://leetcode-cn.com/problems/valid-parenthesis-string/solution/you-xiao-de-gua-hao-zi-fu-chuan-zhan-lia-w0n2/
 */
var checkValidString = function (s) {
  let leftStack = [];
  let starStack = [];

  for (let i = 0; i < s.length; i++) {
    let item = s[i];
    if (item === '(') {
      leftStack.push(i);
    } else if (item === '*') {
      starStack.push(i);
    } else {
      if (leftStack.length) {
        leftStack.pop();
      } else if (starStack.length) {
        starStack.pop();
      } else {
        return false;
      }
    }
  }

  if (starStack.length < leftStack.length) {
    return false;
  }

  while (starStack.length && leftStack.length) {
    if (starStack[starStack.length - 1] < leftStack[leftStack.length - 1]) {
      return false;
    }
    starStack.pop();
    leftStack.pop();
  }
  return true;
};

// 官方 贪心算法
var checkValidString = function (s) {
  let lo = 0,
    hi = 0;
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === '(') {
      lo++;
      hi++;
    } else if (c === ')') {
      if (lo > 0) {
        lo--;
      }
      hi--;
      if (hi < 0) {
        return false;
      }
    } else {
      if (lo > 0) {
        lo--;
      }
      hi++;
    }
  }

  return lo === 0;
};

// 双端遍历，正序以'('为准，倒叙以')'为准，如果"("和")"都够用的话，那么也不会出现多余
var checkValidString = function (s) {
  let cl = 0,
    cls = 0
  for (let i = 0; i < s.length; i++) {
    let item = s[i]
    if (item === '(') {
      cl++
    } else if (item === '*') {
      cls++
    } else {
      if (cl > 0) {
        cl--
      } else if (cls > 0) {
        cls--
      } else {
        return false;
      }
    }
  }

  let cr = 0,
    crs = 0
  for (let i = s.length - 1; i >= 0; i--) {
    let item = s[i]
    if (item === ')') {
      cr++
    } else if (item === '*') {
      crs++
    } else {
      if (cr > 0) {
        cr--
      } else if (crs > 0) {
        crs--
      } else {
        return false;
      }
    }
  }

  return true;
};