/*
Task Link: https://leetcode.com/problems/to-lower-case/description/

Difficulty: Easy

Description:

Implement function ToLowerCase() that has a string parameter str, 
and returns the same string in lowercase.

Example 1:
Input: "Hello"
Output: "hello"

Example 2:
Input: "here"
Output: "here"
*/

/**
 * @param {string} str
 * @return {string}
 */

let toLowerCase = function(str) {
  return str.replace(/[A-Z]/g, char => {
    return String.fromCharCode(char.charCodeAt() + 32);
  });
};
