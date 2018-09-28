/*
Task Link: https://leetcode.com/problems/valid-parentheses/description/

Difficulty: Easy

Description:

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()[]{}"
Output: true

Example 2:
Input: "([)]"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */

let isValid = function(s) {
  if (s === '') return true;
  if (s.length % 2) return false;
  let stack = [];
  const bracesMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (let i = 0; i < s.length; i++) {
    const brace = s[i];
    const isOpeningBracket = bracesMap.hasOwnProperty(brace);
    if (isOpeningBracket) {
      const appropriateClosingBrace = bracesMap[brace];
      stack.push(appropriateClosingBrace);
    } else {
      const isAppropriateClosingBrace = brace === stack.pop();
      if (!isAppropriateClosingBrace) return false;
    }
  }
  return stack.length === 0;
};
