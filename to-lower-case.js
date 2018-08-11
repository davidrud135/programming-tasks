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
  const DIFFERENCE_BTW_UPCASE_AND_LOWCASE_LETTER = 32;
  let lowerCaseLettersArr = str.split('').map(char => {
    const letterCode = char.charCodeAt();
    const upperCaseLetter = letterCode > 64 && letterCode < 91;
    return (upperCaseLetter) 
      ? String.fromCharCode(letterCode + DIFFERENCE_BTW_UPCASE_AND_LOWCASE_LETTER)
      : String.fromCharCode(letterCode);
  });
  return lowerCaseLettersArr.join('');
};
