// https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/

var CQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.s1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.s2.length === 0) {
    let len = this.s1.length;
    while (len--) {
      this.s2.push(this.s1.pop())
    }
  }

  if (this.s2.length) {
    return this.s2.pop();
  }

  return -1;
};