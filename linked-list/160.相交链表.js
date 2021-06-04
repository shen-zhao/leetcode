/*
https://leetcode-cn.com/problems/intersection-of-two-linked-lists/submissions/
*/

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 本解法思路：想找交点，AB长度大概率不想当，但是如果AB真的能相交，那么AB相交之后是同一条链表
// 那么我们可以先通过一次遍历获得AB两天链表的长度，长度差后的值为k，我们客户把比较长的链表先走k个长度，
// 然后AB两个链表同事向下走，如果遇到相同的节点，那么就是相交链表，并返回该节点
var getIntersectionNode = function (headA, headB) {
  let alen = 0;
  let blen = 0;
  let a = headA;
  let b = headB;
  while (a || b) {
    if (a) {
      alen++;
      a = a.next;
    }
    if (b) {
      blen++;
      b = b.next;
    }
  }
  let adb = alen > blen;
  let k = Math.abs(alen - blen);

  a = headA;
  b = headB;
  while (a || b) {
    if (k > 0) {
      if (adb) {
        a = a && a.next;
      } else {
        b = b && b.next;
      }
      k--;
    } else {
      if (!a || !b) {
        return null;
      }
      if (a === b) {
        return a;
      }
      a = a && a.next;
      b = b && b.next;
    }
  }

  return null;
};

/**
 * 双指针
 * 原理与解法一类似，找出长度差，然后对其遍历
 * 本解法有点在于写法简单，比较巧妙
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/xiang-jiao-lian-biao-by-leetcode-solutio-a8jn/
*/
var getIntersectionNode = function(headA, headB) {
  let pA = headA, pB = headB
  while (pA !== pB) {
    pA = pA == null ? headB : pA.next
    pB = pB == null ? headA : pB.next
  }

  return pA
}