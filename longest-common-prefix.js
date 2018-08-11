/*
Task Link: https://leetcode.com/problems/longest-common-prefix/description/

Difficulty: Easy

Description:

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

let longestCommonPrefix = function(strs) {
  if(strs.length === 0) {
    return '';
  }
  if(strs.length === 1) {
    return strs.join('');
  }
  let result = strs[0];
  const RESULT_LENGTH = result.length;
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < RESULT_LENGTH; j++) {
      if(strs[i].indexOf(result) === 0) {
        break;
      } else {
       result = result.slice(0, -1);
      }
    }
  }
  return result;
};
