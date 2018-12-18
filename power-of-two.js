/*
Task Link: https://leetcode.com/problems/power-of-two/

Difficulty: Easy

Description:
Given an integer, write a function to determine if it is a power of two.

Example 1:
Input: 16
Output: true
Explanation: 24 = 16

Example 2:
Input: 218
Output: false
*/

/**
 * @param {number} n
 * @return {boolean}
 */

const isPowerOfTwo = function(n) {
  return Math.log2(n) % 1 === 0;
  // let nums = [];
  // for (let i = 0; i < 50; i++) {
  //   nums[i] = Math.pow(2, i);
  // }
  // return nums.includes(n);
};


