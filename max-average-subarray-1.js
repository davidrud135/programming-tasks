/*
Task Link: https://leetcode.com/problems/maximum-average-subarray-i/

Difficulty: Easy

Description:
Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value.
And you need to output the maximum average value.

Example:
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const findMaxAverage = function(nums, k) {
  const arrLength = nums.length;
  if (arrLength === 1) return nums[0];
  if (k === 1) return Math.max(...nums);
  let currSum = nums.slice(0, k).reduce((sum, num) => sum + num);
  let maxSum = currSum;
  for (let i = k; i < arrLength; i++) {
    const preSubArrElem = nums[i - k];
    const postSubArrElem = nums[i];
    currSum = currSum - preSubArrElem + postSubArrElem;
    maxSum = (currSum > maxSum) ? currSum : maxSum;
  }
  return maxSum / k;
};
