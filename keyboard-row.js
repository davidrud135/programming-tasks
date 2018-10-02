/*
Task Link: https://leetcode.com/problems/keyboard-row/description/

Difficulty: Easy

Description:
Given a List of words, return the words that can be typed using letters of 
alphabet on only one row's of American keyboard like the image below.

Example 2:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */

let findWords = function(words) {
  const rowsRegExp = /\b[qwertyuiop]+\b|\b[asdfghjkl]+\b|\b[zxcvbnm]+\b/gi;
  return words.filter(word => word.match(rowsRegExp));
};
