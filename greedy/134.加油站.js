/*
https://leetcode-cn.com/problems/gas-station/
*/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
  let len = gas.length
  for (let i = 0; i < len;) {
    if (gas[i] < cost[i]) {
      i++
      continue
    }
    let count = 0
    let s = i
    while (s < i + len && count >= 0) {
      count += gas[s % len]
      count -= cost[s % len]
      s++
    }
    if (count >= 0) {
      return i
    } else {
      // https://leetcode-cn.com/problems/gas-station/solution/gong-shui-san-xie-noxiang-xin-ke-xue-xi-zsgqp/
      i = s
    }
  }

  return -1
};