/**
 * https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 * @param {ListNode} head
 * @return {ListNode}
 */
// 整体思路可以这样考虑，把一个栈的元素移动到另一个栈，这样两个栈的顺序就是相反的，栈顶成了栈底
var reverseList = function(head) {
  let h = null; // 新栈的栈顶
  let c = head; // 旧栈的当前操作的指针

  while (c) {
    // 临时保存旧栈的下一个节点
    let t = c.next;
    // 当前节点链接当前新栈的栈顶
    c.next = h;
    // 修改新栈的栈顶为当前节点
    h = c;
    // 移动旧栈当前操作指针，进行下一次操作
    c = t;
  }

  return h;
};