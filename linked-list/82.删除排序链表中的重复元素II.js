/*
https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dummy = new ListNode()
  dummy.next = head
  let curr = head
  let prev = dummy
  let repeat = null
  while (curr) {
    while (curr.next && curr.next.val == curr.val) {
      curr.next = curr.next.next
      repeat = curr.val
    }
    if (curr.val === repeat) {
      prev.next = curr.next
    } else {
      repeat = null
      prev = curr
    }
    curr = curr.next
  }

  return dummy.next
};