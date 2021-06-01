/*
https://leetcode-cn.com/problems/palindrome-linked-list/
*/
/**
 * 解法一 时间O(n) 空间O(n)
 * 双指针, 先把链表拍平成数组，然后对数组通过双指针判断回文
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let nodes = [];
  while (head) {
    nodes.push(head.val);
    head = head.next;
  }

  for (let i = 0, j = nodes.length - 1; i < j; i++, j--) {
    if (nodes[i] !== nodes[j]) {
      return false;
    }
  }

  return true;
};

/*
其他解法思路：
构建一个新的翻转链表；
然后遍历原链表和翻转后的链表，如果全部相同则是回文，否则不是回文
*/
var isPalindrome = function (head) {
  let c = head;
  let h = null;
  // 翻转链表
  while (c) {
    let n = c.next;
    let clone = new ListNode(c.val); // 必须构建新节点
    clone.next = h;
    h = clone;
    c = n;
  }

  c = head;
  // 遍历两条链表
  while (c) {
    if (h.val !== c.val) {
      return false;
    }
    c = c.next;
    h = h.next;
  }

  return true;
};