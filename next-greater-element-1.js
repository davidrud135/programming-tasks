/*
Task Link: https://leetcode.com/problems/next-greater-element-i/description/

Difficulty: Easy

Description:
You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2.
Find all the next greater numbers for nums1's elements in the corresponding places of nums2.
The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2.
If it does not exist, output -1 for this number.

Example:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
For number 1 in the first array, the next greater number for it in the second array is 3.
For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let nextGreaterElement = function(nums1, nums2) {
  return nums1.map(firstArrNum => {
    for (let i = nums2.indexOf(firstArrNum) + 1; i < nums2.length; i++) {
      if (nums2[i] > firstArrNum) return nums2[i];
    }
    return -1;
  });
};
