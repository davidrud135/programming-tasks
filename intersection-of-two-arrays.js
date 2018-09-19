/*
Task Link: https://leetcode.com/problems/intersection-of-two-arrays/description/

Difficulty: Easy

Description:

Given two arrays, write a function to compute their intersection.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]

Note:
Each element in the result must be unique.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let intersection = function(nums1, nums2) {
  let intersectedNumsArr = [];
  for (let i = 0; i < nums1.length; i++) {
    const firstArrNum = nums1[i];
    if (!intersectedNumsArr.includes(firstArrNum) && nums2.includes(firstArrNum)) {
      intersectedNumsArr.push(firstArrNum);
    }
  }
  return intersectedNumsArr;
};
