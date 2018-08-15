/*
Task Link: https://leetcode.com/problems/self-dividing-numbers/description/

Difficulty: Easy

Description:

A self-dividing number is a number that is divisible by every digit it contains.
For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
Also, a self-dividing number is not allowed to contain the digit zero.
Given a lower and upper number bound, output a list of every possible self dividing number, 
including the bounds if possible.

Example:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

let selfDividingNumbers = function(left, right) {
  for (let num = left; num < right; num++) {
    console.log(num);
  }
};

selfDividingNumbers(1, 22);
