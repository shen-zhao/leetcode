/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * 迭代法
 * 两个节点进行交换，关键点在于，下次循环开始之前，需要记录上一次交换后的尾结点，因为下次需要这个尾结点指向下个的头节点
 */
var swapPairs = function(head) {
  if (head == null || head.next == null) return head;
  const res = head.next;
  let prev;

  while (head && head.next) {
    let node1 = head;
    let node2 = head.next;
    let node3 = head.next.next;
    node2.next = node1;
    node1.next = node3;
    if (prev) { // 如果有上一步保存的尾结点，需要把尾结点和本次的头节点相连
      prev.next = node2;
    }
    prev = node1; // 记录本次交换后的尾结点
    head = node3;
  }
  
  return res;
};

/**
 * 递归法，满足翻转的最小条件是有两个节点，这也是递的最小单元
 * 终止条件：无节点或者节点无next节点，此时无法翻转，直接返回
 * 递：翻转两个节点，用head表示原始链表头节点，新链表中为第二个节点；用newHead标识原是链表第二个节点，新链表中为第一个节点，newHead.next为剩余未翻转节点，需要操作head.next = swapPairs(newHead.next)
 */
var swapPairs = function(head) {
  if (head == null || head.next == null) return head;
  
  const newHead = head.next;
  // 此处注意newHead.next的引用，需要先使用，后重置
  head.next = swapPairs(newHead.next);
  newHead.next = head;

  return newHead;
};
// @lc code=end

