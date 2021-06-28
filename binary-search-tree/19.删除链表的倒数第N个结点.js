/*
https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
*/

// 数组解法
var removeNthFromEnd = function(head, n) {
  let arr = []
  let curr = head
  while (curr) {
    arr.push(curr)
    curr = curr.next
  }

  let targetIndex = arr.length - n
  if (targetIndex === 0) {
    let target = arr[targetIndex]
    let next = target.next
    target.next = null
    return next
  } else {
    let target = arr[targetIndex]
    let prev = arr[targetIndex - 1]
    let next = target.next
    target.next = null
    prev.next = next

    return head
  }
};

// 快慢指针
var removeNthFromEnd = function(head, n) {
  let k = 0
  let prev = null
  let c1 = head
  let c2 = head
  while (c2) {
    if (k++ < n) {
      c2 = c2.next
    } else {
      prev = c1
      c1 = c1.next
      c2 = c2.next
    }
  }

  if (prev == null) {
    let res = c1.next
    c1.next = null
    return res
  } else {
    let next = c1.next
    c1.next = null
    prev.next = next
    return head
  }
}