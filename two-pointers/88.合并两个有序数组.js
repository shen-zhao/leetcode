//https://leetcode-cn.com/problems/merge-sorted-array/

// 解法1， 双指针法
var merge = function (nums1, m, nums2, n) {
  let sorted = [];
  let l1 = 0,
    l2 = 0;

  while (l1 < m || l2 < n) {
    if (l1 < m && l2 < n) {
      if (nums1[l1] < nums2[l2]) {
        sorted.push(nums1[l1++]);
      } else {
        sorted.push(nums2[l2++]);
      }
    } else if (l1 < m) {
      sorted.push(nums1[l1++]);
    } else if (l2 < n) {
      sorted.push(nums2[l2++]);
    }
  }

  for (let i = 0; i < sorted.length; i++) {
    nums1[i] = sorted[i]
  }
};

// 解法二  动态插入
var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  nums2.length = n;
  let d = 0;

  for (let i = 0; i < n; i++) {
    let len = nums1.length;
    for (let j = d; j < len; j++) {
      if (nums2[i] <= nums1[j]) {
        nums1.splice(j, 0, nums2[i]);
        d = j;
        break;
      }
    }
    if (len === nums1.length) {
      nums1.push(nums2[i]);
    }
  }
};

// 解法三   先合并在排序
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b)
};