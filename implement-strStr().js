/*
Task Link: https://leetcode.com/problems/implement-strstr/description/

Difficulty: Easy

Description:

Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

Clarification:
We will return 0 when needle is an empty string.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

let strStr = function(haystack, needle) {
  if(needle === '') {
    return 0;
  }
  return haystack.indexOf(needle);
};
