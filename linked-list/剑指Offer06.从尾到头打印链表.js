/*
https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
*/

/**
 * @param {ListNode} head
 * @return {number[]}
 */
// 数组拍平翻转
var reversePrint = function (head) {
  let ans = [];

  while (head) {
    ans.push(head.val);
    head = head.next;
  }

  return ans.reverse();
};

// 利用unshift从头部插入
var reversePrint = function (head) {
  let ans = [];

  while (head) {
    ans.unshift(head.val);
    head = head.next;
  }

  return ans;
};