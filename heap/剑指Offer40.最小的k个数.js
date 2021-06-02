/*
https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
排序
*/
// 抖机灵
var getLeastNumbers = function(arr, k) {
  arr.sort((a, b) => a - b);
  return arr.slice(0, k);
};

// 经典解法：大顶堆 TODO:
