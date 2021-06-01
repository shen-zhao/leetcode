/*
链表
https://leetcode-cn.com/problems/add-two-numbers/
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
*/

// 解法
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
var addTwoNumbers = function(l1, l2) {
	let carry = 0; // 进位
	let h, c; // h: 头节点 c: 当前节点
	
	while (l1 || l2 || carry) {
		let v1, v2, ct, v, n; // ct: 相加之和 v: 进位后的值 n: 新节点
		v1 = l1 ? l1.val : 0;
		v2 = l2 ? l2.val : 0;
		ct = v1 + v2 + carry;
		v = ct % 10; // 取余
		carry = ct > 9 ? 1 : 0; // 判断进位值
		n = new ListNode(v);
		if (h == null) { // 如果没有h，初始化h
			c = h = n;
		} else {
			c.next = n; // 连接节点
			c = n; // 切换当前节点
		}

		// 节点移向下一位
		l1 = l1 && l1.next;
		l2 = l2 && l2.next;
	}

return h;
};