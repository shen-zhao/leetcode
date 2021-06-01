/*
https://leetcode-cn.com/problems/middle-of-the-linked-list/
*/

// 经典解法：快慢指针  时间 O(n) 空间 O(1)
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// 拍平数组，取中间索引  时间 O(n) 空间 O(n)
var middleNode = function (head) {
  let arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }

  return arr[Math.floor(arr.length / 2)];
};

// 单指针法
// 对链表进行两次遍历，第一次获得长度n，第二次获取n / 2位置的节点