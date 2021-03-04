/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let res, curr;

  while (l1 || l2 || carry) {
    let adder = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

    if (adder >= 10) {
      carry = 1;
      adder -= 10;
    } else {
      carry = 0
    }

    if (curr) {
      const next = new ListNode(adder);
      curr.next = next;
      curr = next
    } else {
      res = curr = new ListNode(adder);
    }

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return res || l1 || l2
};
// @lc code=end

