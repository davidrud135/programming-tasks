/*
Task Link: https://leetcode.com/problems/max-consecutive-ones/

Difficulty: Easy

Description:
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
The maximum number of consecutive 1s is 3.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const findMaxConsecutiveOnes = function(nums) {
  return Math.max(...nums
    .join('')
    .split('0')
    .map(group => group.length)
  );
};
