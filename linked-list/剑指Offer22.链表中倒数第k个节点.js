/*
https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
*/

// 解法1，把链表拍平放到数组中，直接用下标索引返回
// 这个方法看起来时间复杂度不高，只遍历了一次O(n)，然后数组也是O(1)操作，空间复杂度O(n)
var getKthFromEnd = function (head, k) {
  let c = head;
  let arr = [];

  while (c) {
    arr.push(c);
    c = c.next;
  }

  return arr[arr.length - k]
};

// 解法二，我看大部分都快慢指针，我觉得叫滑动窗口比较恰当，这个解法比较优雅，时间复杂度O(n), 空间O(1)
// 查找倒数第k个，先声明两个指针，可以先用一个指针从头走k步，然后两个指针同时走，知道快指针到达尾部，满指针及为结果，就相当于一个尺子向后滑动
var getKthFromEnd = function (head, k) {
  let fast = head,
    slow = head;

  while (fast) {
    if (k) {
      fast = fast.next;
      k--;
    } else {
      fast = fast.next;
      slow = slow.next;
    }
  }
  return slow;
};