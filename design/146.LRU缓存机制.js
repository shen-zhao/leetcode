/*
链表 + 栈
https://leetcode-cn.com/problems/lru-cache/
*/

// 解法1，双向链表，写得太恶心了，不要参考，时间复杂度 get: O(n) put: O(1)
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.head = null;
  this.tail = null;
  this.maxLen = capacity;
  this.len = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let r = getNode(this, this.head, key);

  if (r) {
    hoist(this, r);
    return r.val;
  }
  return -1;
};

function getNode(ctx, head, key) {
  let c = head;
  let r;
  let d = 0;
  while (c) {
    d++;
    if (d > ctx.maxLen) {
      break;
    }
    if (c.key === key) {
      r = c;
      break;
    }
    c = c.next;
  }
  return r;
}

function hoist(ctx, v) {
  if (v === ctx.head) return;
  let vn = v.next;
  let vp = v.prev;
  v.prev = null;
  v.next = ctx.head;
  ctx.head.prev = v;
  ctx.head = v;
  if (vp) {
    vp.next = vn;
  }
  if (vn) {
    vn.prev = vp;
  }
  if (v === ctx.tail && vp) {
    ctx.tail = vp;
  }
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const v = getNode(this, this.head, key);

  if (v) {
    v.val = value;
    hoist(this, v);
  } else {
    const node = new Node(key, value);

    if (this.head === null) {
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
    }
    this.head = node;

    if (this.len === this.maxLen) {
      const t = this.tail;
      const tp = t.prev;
      if (tp) {
        tp.next = null;
        this.tail = tp;
      }
    } else {
      this.len++;
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var Node = function (key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
}

// --------------------------分割线--------------------------------
// 解法二
// 数组模拟栈操作 时间复杂度 get: O(n) put: 最好O(1)
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.stack = [];
  this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const [index, node] = getNode(this, key);

  if (node) {
    this.stack.push(this.stack.splice(index, 1)[0]);
    return node.val;
  }
  return -1;
};

function getNode(ctx, key) {
  const index = ctx.stack.findIndex(n => n.key === key);

  return [index, ctx.stack[index]];
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const [index, node] = getNode(this, key);

  if (node) {
    node.val = value;
    this.stack.push(this.stack.splice(index, 1)[0]);
  } else {
    let n = new Node(key, value);
    if (this.capacity === this.stack.length) {
      this.stack.shift();
    }
    this.stack.push(n)
  }
};

function Node(key, val) {
  this.key = key;
  this.val = val;
}

// --------------------------分割线--------------------------------
// 解法三
// 双向链表 + Map，时间复杂度 get: O(1) put: O(1)
// 这个还可以，思路还算清晰，代码应该还有优化空间

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.head = null; // 链表头
  this.tail = null; // 链表尾
  // 所有有效节点会存储的map中便于get O(1)
  this.map = new Map();
  // 最大限制
  this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // get时先删除，后续会修改位置
  const node = this.remove(key);
  if (node) {
    // 追加节点
    this.add(key, node);
    // 返回值
    return node.val;
  }
  return -1;
};

/** 
 * 添加节点，追加到链表顶部
 * @param {number} key
 * @param {Node} node
 * @return {void}
 */
LRUCache.prototype.add = function (key, node) {
  // 添加map
  this.map.set(key, node);
  // 如果有头节点
  if (this.head != null) {
    // 当前节点next指向当前头节点
    node.next = this.head;
    // 头节点prev执行当前节点
    this.head.prev = node;
  }
  // 替换头节点
  this.head = node;
  // 如果没有尾结点，说明也是第一次add，那么当前节点也是尾结点
  if (this.tail == null) {
    this.tail = node;
  }
};
/** 
 * 移除并返回节点
 * @param {number} key
 * @return {Node}
 */
LRUCache.prototype.remove = function (key) {
  let node = this.map.get(key);
  // 如果节点存在，准备移除
  if (node) {
    let n = node.next; // 节点next指针
    let p = node.prev; // 节点prev指针
    // 分情况考虑
    if (node == this.head && node === this.tail) { // 要删除的节点即使head也是tail，说明现在已有一个节点
      this.head = null;
      this.tail = null;
    } else if (node === this.head) { // 要删除的节点是头节点
      this.head = n;
      n.prev = null;
    } else if (node === this.tail) { // 要删除的节点是尾节点
      this.tail = p;
      p.next = null
    } else { // 删除的是中间的节点
      p.next = n;
      n.prev = p;
    }
    node.next = null;
    node.prev = null;
  }

  this.map.delete(key); // 删除map

  return node;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let node;
  if (this.map.has(key)) {
    // 如果有，先删除，后续再添加
    node = this.remove(key);
    node.val = value; // 更新最新值
  } else {
    // 创建新节点
    node = new Node(key, value);
  }
  // 如果超出长度，删除链表尾结点
  if (this.map.size === this.capacity) {
    this.remove(this.tail.key);
  }
  // 添加节点
  this.add(key, node);
};

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// 解法四 利用JS ES6 Map，Map key有顺序，迭代器特性
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map;
  this.max = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  } else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  } else {
    if (this.map.size >= this.max) {
      this.map.delete(this.map.keys().next().value);
    }
  }
  this.map.set(key, value);
};