/*
Task Link: https://leetcode.com/problems/perfect-number/description/

Difficulty: Easy

Description:

We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.

Example:
Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14

Note: The input number n will not exceed 100,000,000. (1e8)
*/

/**
 * @param {number} num
 * @return {boolean}
 */

// My solution
let checkPerfectNumber = function(num) {
  if(num === 0 || num === 1) return false;
  let divisorsSum = 0;
  for (let i = num - 1; i >= 1; i--) {
    if(num % i === 0) {
      divisorsSum += i;
    }
  }
  return divisorsSum === num;
};

/* 
  As we can see at this site: https://en.wikipedia.org/wiki/List_of_perfect_numbers,
  we have only 5 unique perfect numbers which is not exceed 100,000,000. (See Note at the top)
  So our program becomes very simple:
*/

// The most correct and fast solution.
let checkPerfectNumber = function(num) {
  return [6, 28, 496, 8128, 33550336].includes(num);
};
