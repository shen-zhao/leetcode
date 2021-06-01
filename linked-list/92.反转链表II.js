/*
https://leetcode-cn.com/problems/reverse-linked-list-ii/
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === right) {
    return head;
  }

  let prev, turn, rest; // prev: 第一段最后一个 m: 待翻转段 rest: 剩余段
  let c = head; // 当前节点
  let h = null; // 翻转后的头节点
  let i = 1; // 节点位置
  while (c) {
    if (i + 1 === left) {
      // 获取第一段最后一个: prev
      prev = c;
      c = c.next;
      i++
      continue;
    } else {
      // 翻转区
      if (i <= right && i >= left) {
        // 保存next用于下一次翻转重置
        let t = c.next;
        // 待翻转区，保存第一个节点，用于翻转后连接rest
        if (i === left) {
          turn = c;
        }
        // 待翻转区最后一个节点，next节点即为rest
        if (i === right) {
          rest = c.next;
        }
        // 拼接上一次的头节点
        c.next = h;
        // 重置头节点
        h = c;
        // 下一次循环
        c = t;
        i++;
        continue
      }
    }
    c = c.next;
    i++;
  }

  // 如果prev有值，说明left > 1，然后拼接翻转后的头节点
  if (prev) {
    prev.next = h;
  }
  // 翻转区翻转之前的头节点，翻转后成为尾结点，然后连接rest
  turn.next = rest;

  return prev ? head : h;
};