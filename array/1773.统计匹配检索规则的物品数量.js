/*
https://leetcode-cn.com/problems/count-items-matching-a-rule/
*/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let ruleKeyIdx = {
    type: 0,
    color: 1,
    name: 2
  }[ruleKey]

  return items.reduce((res, curr) => curr[ruleKeyIdx] === ruleValue ? res + 1 : res, 0)
};