/*
https://leetcode-cn.com/problems/reorder-list/
给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
*/

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 线性解法 时间O(n) 空间O(n)
// 先把链表拍平成数组，再按要求链接节点
var reorderList = function (head) {
  let ans = head;
  let arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }

  let l = 0,
    r = arr.length - 1;
  while (l < r) {
    arr[l].next = arr[r];
    l++;
    if (l === r) {
      break;
    }
    arr[r].next = arr[l];
    r--;
  }
  // 必须清除最后一个节点的next指针，避免成环
  arr[r].next = null;

  return ans;
};

// 解法二：寻找链表中点 + 链表逆序 + 合并链表