/* 
Task link: https://leetcode.com/problems/valid-anagram/description/

Difficulty: Easy

Description:

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

let isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let letters = {};
  for (let i = 0; i < s.length; i++) {
    const sLetter = s[i];
    if(sLetter in letters) {
      letters[sLetter] += 1;
    } else {
      letters[sLetter] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    const tLetter = t[i];
    if(tLetter in letters) {
      letters[tLetter] -= 1;
    } else {
      return false;
    }
  }
  for (const prop in letters) {
    if(letters[prop] !== 0) {
      return false;
    }
  }
  return true;
};
