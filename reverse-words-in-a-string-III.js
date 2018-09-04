/*
Task Link: https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

Difficulty: Easy

Description:

Given a string, you need to reverse the order of characters in each word 
within a sentence while still preserving whitespace and initial word order.

Example:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/

/**
 * @param {string} s
 * @return {string}
 */

// ES6 function
let reverseWords = function(s) {
  return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
};

// Much bigger, but faster than previous function
let reverseWords = function(s) {
  const words = s.split(' ');
  let reversedWordsStr = '';
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = word.length - 1; j >= 0; j--) {
      const letter = word[j];
      reversedWordsStr += letter;
    }
    if (i !== words.length - 1) reversedWordsStr += ' ';
  }
  return reversedWordsStr;
};
