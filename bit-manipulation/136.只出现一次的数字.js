// https://leetcode-cn.com/problems/single-number/
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 异或操作符(题干限定了出现两次)  时间复杂度 O(n) 空间复杂度O(1)
var singleNumber = function (nums) {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i]
  }

  return res;
};


// 解法二：集合存储  时间复杂度 O(n) 空间复杂度O(n)
var singleNumber = function (nums) {
  let set = new Set;

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (set.has(n)) {
      // 删除是因为题干已经说明了，最多出现两次，如果没有这个条件，那么需要累加，那么需要Map来额外存储出现次数
      set.delete(n);
    } else {
      set.add(n);
    }
  }

  for ([n, v] of set.entries()) {
    return n;
  }
};