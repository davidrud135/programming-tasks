/*
Task Link: https://leetcode.com/problems/find-all-duplicates-in-an-array/

Difficulty: Medium

Description:
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements that appear twice in this array.

Example:
Input: [4,3,2,7,8,2,3,1]
Output: [2,3]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findDuplicates = function(nums) {
  let numsCounter = {};
  let duplicatesArr = [];
  nums.forEach(num => {
    numsCounter[num] = numsCounter.hasOwnProperty(num) ? numsCounter[num] + 1 : 1;
  });
  for (const num in numsCounter) {
    const numCount = numsCounter[num];
    if (numCount > 1) duplicatesArr.push(+num);
  }
  return duplicatesArr;
};
