/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
/**
 * 迭代法
 * 同时遍历两个链表，当一个链表长度为空时，后续可以直接连接另一个链表
 * 创建一个头节点，遍历l1和l2时，取较小值连接头节点，每连接一个后，需要重置相应节点的位置，每次遍历完成也要移动prev节点
 * 之前存在误区，手动创建了所有新节点，但是链表的算法，应该能复用原始节点，只需要修改原始节点的指向即可
 */
var mergeTwoLists = function(l1, l2) {
  // 初始化头节点
  let head = new ListNode(null);
  let prev = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      prev.next = l1;
      // l1节点向后移动一位
      l1 = l1.next;
    } else {
      prev.next = l2;
      // l2节点向后移动一位
      l2 = l2.next;
    }
    // 向后移动prev节点，准备下一次合并
    prev = prev.next;
  }

  prev.next = l1 || l2; // 合并后的节点需要再次合并l1和l2剩余的节点

  return head.next;
};

/**
* 递归法
* 终止条件(归)：l1为空或者l2为空时返回另一个
* 递：判断l1和l2值的大小，谁小谁就是需要合并的节点，并返回该节点，该节点为当时合并节点的尾结点(tail)，合并该节点后，需要合并后续节点，且后续节点的合并结果应该指向上一个tail节点
* 注意：val相等的情况不能缺失
*/
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2
  } else if (!l2) {
    return l1
  } else if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
};
// @lc code=end

