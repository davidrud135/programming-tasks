/*
Task Link: https://leetcode.com/problems/reverse-only-letters/

Difficulty: Easy

Description:
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place,
and all letters reverse their positions.

Example 1:
Input: "ab-cd"
Output: "dc-ba"

Example 2:
Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
*/

/**
 * @param {string} S
 * @return {string}
 */

const reverseOnlyLetters = function(str) {
  const reversedLettersArr = str.replace(/[^a-z]/gi, '').split('').reverse();
  let resultStr = '';
  for (let i = 0; i < str.length; i++) {
    const strChar = str[i];
    resultStr += /[a-z]/i.test(strChar) ? reversedLettersArr.shift() : strChar;
  }
  return resultStr;
};
