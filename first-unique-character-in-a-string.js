/*
Task Link: https://leetcode.com/problems/first-unique-character-in-a-string/

Difficulty: Easy

Description:
Given a string, find the first non-repeating character in it and return it's index.
If it doesn't exist, return -1.

Examples:
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
*/

/**
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (s.indexOf(char) === s.lastIndexOf(char)) return i;
  }
  return -1;
};
