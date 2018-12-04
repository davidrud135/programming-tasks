/*
Task Link: https://leetcode.com/problems/add-digits/

Difficulty: Easy

Description:
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:
Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.
*/

/**
 * @param {number} num
 * @return {number}
 */

const addDigits = function(num) {
  num = num.toString().split('').reduce((sum, digit) => +sum + +digit, 0);
  return (num <= 9) ? num : addDigits(num);
};
