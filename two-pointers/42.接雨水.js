/*
双指针
https://leetcode-cn.com/problems/trapping-rain-water/
*/

// 解法一: 暴力解法 时间 O(n^2) 空间O(1)
var trap = function (height) {
  let ans = 0;
  let len = height.length;

  // 第一层循环访问去除头尾的每一个高度
  for (let i = 1; i < len - 1; i++) {
    // 每一个位置的雨水高度跟它两侧最高点较小的高度有关
    let maxLeft = 0,
      maxRight = 0;
    // 寻找左侧最高点
    for (let j = i - 1; j >= 0; j--) {
      maxLeft = Math.max(maxLeft, height[j]);
    }
    // 寻找右侧最高点
    for (let k = i + 1; k < len; k++) {
      maxRight = Math.max(maxRight, height[k]);
    }
    // 两侧较小高度 - 当前的柱子数即当前柱子出存水的量
    ans += Math.max(Math.min(maxRight, maxLeft) - height[i], 0)
  }

  return ans;
};

// 解法二: 双指针 时间 O(n) 空间O(1)
/*
双指针法比较巧妙，从暴力法我们就需要去获取左侧最高点和右侧最高点，其实可以动态维护这两个值，
利用两侧双指针，在大形式下决定以谁为准(以小的为准)，如果做指针高度小，则操作左侧，具体步骤：
	左侧对比maxLeft，如果当前指针高度大于maxLeft，则肯定存不住水，所以重置maxLeft，反之，
  如果当前指针高度小于maxLeft，则肯定能存住水（因为大形势下，右侧高度能够hold住），
  此时当前指针高度 - maxLeft即为此处存水量，加到全局水量上，然后left++，进行下一次循环
右侧高度小于左侧高度做镜像相同的操作。
*/
var trap = function (height) {
  let ans = 0;
  let len = height.length;
  let left = 0,
    right = len - 1;
  let maxLeft = 0,
    maxRight = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        ans += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        ans += maxRight - height[right];
      }
      right--;
    }
  }

  return ans;
};

// 解法三  双指针变种
var trap = function (height) {
  let ans = 0
  let len = height.length
  let left = 0,
    right = len - 1
  let maxLeft = 0,
    maxRight = 0

  while (left <= right) {
    if (maxLeft < maxRight) {
      ans += Math.max(0, maxLeft - height[left])
      maxLeft = Math.max(maxLeft, height[left])
      left++
    } else {
      ans += Math.max(0, maxRight - height[right])
      maxRight = Math.max(maxRight, height[right])
      right--
    }
  }

  return ans
};