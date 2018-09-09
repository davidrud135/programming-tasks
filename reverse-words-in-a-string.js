/*
Task Link: https://leetcode.com/problems/reverse-words-in-a-string/description/

Difficulty: Medium

Description:

Given an input string, reverse the string word by word.

Example:
Input: "the sky is blue",
Output: "blue is sky the".

Note:
A word is defined as a sequence of non-space characters.
Input string may contain leading or trailing spaces. 
However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.
*/

/**
 * @param {string} str
 * @returns {string}
 */

let reverseWords = function(str) {
  const trimmedStr = str.trim();
  const trimmedStrArr = trimmedStr.split(' ');
  let reversedStr = '';
  for (let i = trimmedStrArr.length - 1; i >= 0; i--) {
    const elem = trimmedStrArr[i];
    if (elem === '') continue;
    reversedStr += elem;
    if (i !== 0) reversedStr += ' ';
  }
  return reversedStr;
};
