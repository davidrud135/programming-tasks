/*
Task Link: https://leetcode.com/problems/reverse-string/description/

Difficulty: Easy

Description:

Write a function that takes a string as input and returns the string reversed.

Example 1:
Input: "hello"
Output: "olleh"

Example 2:
Input: "A man, a plan, a canal: Panama"
Output: "amanaP :lanac a ,nalp a ,nam A"
*/

/**
 * @param {string} s
 * @return {string}
 */

let reverseString = function(s) {
  let reversedStr = '';
  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    reversedStr += char;
  }
  return reversedStr;
};
