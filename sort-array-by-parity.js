/*
Task Link: https://leetcode.com/problems/sort-array-by-parity/

Difficulty: Easy

Description:
Given an array A of non-negative integers, 
return an array consisting of all the even elements of A, followed by all the odd elements of A.
You may return any answer array that satisfies this condition.

Example:
Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */

const sortArrayByParity = function(arr) {
  const onlyOddNums = [];
  const onlyEvenNums = arr.filter(num => {
    if (num % 2) {
      onlyOddNums.push(num);
      return false;
    }
    return true;
  });
  return onlyEvenNums.concat(onlyOddNums);
};
