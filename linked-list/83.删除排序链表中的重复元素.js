/*
https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
*/

// 解法一，集合 + 新链表
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let s = new Set(); // 集合验重
  let c = head; // 遍历当前节点
  let res = new ListNode(); // 新头节点
  let c1 = res; // 新链表尾结点，用来添加新的不重复节点

  while (c) {
    // 节点不存在则链接到新链表中
    if (!s.has(c.val)) {
      s.add(c.val); // 集合保存
      c1.next = c; // 新链表尾部追加不重复节点
      c1 = c; // 更新新链表尾节点
    }
    c = c.next; // 原链表指向下一个节点
    c1.next = null; // 重置next，这里需要重置新链表尾节点的next指针，防止：1233这种情况(应该为123，如果重置指针未断开)
  }

  return res.next;
};

// 解法二，一次遍历即可
// 当前节点和下一个节点比较，如相当，放弃next节点，指向next.next节点，否则向前移动当前节点
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let c = head;
  while (c) {
    if (c.next) {
      if (c.val === c.next.val) {
        c.next = c.next.next;
      } else {
        c = c.next;
      }
    } else {
      c = c.next
    }
  }

  return head;
};