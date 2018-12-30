/*
Task Link: https://leetcode.com/problems/range-sum-query-immutable/

Difficulty: Easy

Description:
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]
sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

Note:
You may assume that the array does not change.
There are many calls to sumRange function.
*/

class NumArray {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.cache = [0];
    for (let i = 0; i < nums.length; i++) {
      this.cache.push(nums[i] + this.cache[i]);
    }
  }
  /** 
   * @param {number} i 
   * @param {number} j
   * @return {number}
   */
  sumRange(start, end) {
    return this.cache[end + 1] - this.cache[start];
  }
}
