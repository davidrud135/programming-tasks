/*
Task Link: https://leetcode.com/problems/sort-array-by-parity-ii/

Difficulty: Easy

Description:
Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
You may return any answer array that satisfies this condition.

Example 1:
Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */

const sortArrayByParityII = function(nums) {
  const oddNums = [];
  const evenNums = nums.filter(num => {
    if (isOdd(num)) {
      oddNums.push(num);
      return false;
    }
    return true;
  });
  let sortedArr = [];
  for (let i = 0; i < nums.length; i++) {
    sortedArr[i] = isOdd(i) ? oddNums.pop() : evenNums.pop();
  }
  return sortedArr;
};

const isOdd = num => num % 2;
