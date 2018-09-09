/*
Task Link: https://leetcode.com/problems/single-number/description/

Difficulty: Easy

Description:

Given a non-empty array of integers, every element appears twice except for one.
Find that single one.

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

let singleNumber = function(nums) {
  let numsCounter = {};
  for (let i = 0; i < nums.length; i++) {
    const elem = nums[i];
    if(elem in numsCounter) {
      numsCounter[elem] += 1;
    } else {
      numsCounter[elem] = 1;
    }
  }
  for (const key in numsCounter) {
    if (numsCounter[key] === 1) return Number(key);
  }
};
