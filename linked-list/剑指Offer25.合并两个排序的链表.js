/*
https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
合并两个排序的数组同样适用
*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 声明两个指针，分别对应链表，比较两个指针的大小，从而移动指针，依次进行排序
// 迭代
var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode();
  let curr = dummy;

  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        curr.next = l1;
        curr = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        curr = l2;
        l2 = l2.next;
      }
    } else if (l1) {
      curr.next = l1;
      curr = l1;
      l1 = l1.next;
    } else if (l2) {
      curr.next = l2;
      curr = l2;
      l2 = l2.next;
    }
  }

  return dummy.next;
};

// 递归
var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};