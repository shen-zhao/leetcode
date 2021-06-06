/*
https://leetcode-cn.com/problems/linked-list-cycle/
*/

// 解法一: 快慢指针，c1每次走一步，c2每次走两步,时间 O(n) 空间O(1)
var hasCycle = function (head) {
  let c1 = head,
    c2 = head && head.next && head.next.next;

  while (c1) {
    if (c1 === c2) {
      return true;
    }
    c1 = c1.next;
    c2 = c2 && c2.next && c2.next.next;
  }

  return false;
};

// 暴力法备忘录 时间 O(n) 空间O(n)
var hasCycle = function (head) {
  var set = new Set;
  while (head) {
    if (set.has(head)) {
      return true;
    }
    set.add(head);
    head = head.next;
  }

  return false;
};