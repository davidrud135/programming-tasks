/*
Task Link: https://leetcode.com/problems/intersection-of-two-arrays-ii/submissions/

Difficulty: Easy

Description:
Given two arrays, write a function to compute their intersection.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersect = function(nums1, nums2) {
  let resultArr = [];
  for (let i = 0; i < nums1.length; i++) {
    const firstArrElem = nums1[i];
    if (nums2.includes(firstArrElem)) {
      resultArr.push(firstArrElem);
      nums2.splice(nums2.indexOf(firstArrElem), 1);
    }
  }
  return resultArr;
};
