/**
排序算法
https://leetcode-cn.com/problems/sort-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
// 选择排序
// 查找当前索引后比当前值小的最小值，结束查找后交换值
var sortArray = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) { // 注意j = i + 1
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }

  return nums;
};

// 快速排序
var sortArray = function (nums) {
  // 排序方法
  var sort = function (nums, p, r) {
    if (p < r) {
      // 分割索引
      let q = partition(nums, p, r);
      // 递归排序
      sort(nums, p, q - 1);
      sort(nums, q + 1, r);
    }
  }

  // 寻找分割索引并对数组进行原址排序
  var partition = function (nums, p, r) {
    // 基准值
    let x = nums[r];
    // 基准值将来插入的相对索引，-1很重要，如果所有值都不小于基准值，那么基准值应该插入到p之前的元素的后面，所以这里需要向前重置一个索引
    let i = p - 1;
    for (let j = p; j < r; j++) {
      // 更新基准值相对索引，并交换当前最小值
      if (nums[j] < x) {
        i++;
        if (i !== j) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
        }
      }
    };
    [nums[i + 1], nums[r]] = [nums[r], nums[i + 1]];

    return i + 1;
  }

  sort(nums, 0, nums.length - 1);

  return nums;
};

// 归并排序
var sortArray = function (nums) {
  // 临时数组
  let tmp = [];

  var sort = function (nums, l, r) {
    if (l >= r) return;
    // 取索引中值
    let mid = (l + r) >>> 1;
    sort(nums, l, mid);
    sort(nums, mid + 1, r);
    let i = l,
      j = mid + 1;
    let c = 0;

    // 执行这个循环的时候，左侧和右侧都是一个有序的数组了，先只是对两个有序的数组进行合并，
    // 合并用到了全局的临时数组
    while (i <= mid && j <= r) {
      if (nums[i] < nums[j]) {
        tmp[c++] = nums[i++];
      } else {
        tmp[c++] = nums[j++];
      }
    }
    // 收尾
    while (i <= mid) {
      tmp[c++] = nums[i++];
    }
    // 收尾
    while (j <= r) {
      tmp[c++] = nums[j++];
    }

    // 将临时数组的值拷贝到原数组
    for (let k = 0; k < r - l + 1; k++) {
      nums[k + l] = tmp[k];
    }
  }

  sort(nums, 0, nums.length - 1);

  return nums;
};