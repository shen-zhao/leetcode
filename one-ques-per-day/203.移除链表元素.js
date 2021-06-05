/*
https://leetcode-cn.com/problems/remove-linked-list-elements/
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
 * @param {number} val
 * @return {ListNode}
 */
// 迭代
var removeElements = function(head, val) {
  let dummy = new ListNode()
  dummy.next = head
  let prev = dummy
  let curr = head

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next
    } else {
      prev = curr
    }
    curr = curr.next
  }

  return dummy.next
};

// 递归
var removeElements = function(head, val) {
  if (head == null) return head
  head.next = removeElements(head.next, val)
  return head.val === val ? head.next : head
};