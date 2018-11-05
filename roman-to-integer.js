/*
Task Link: https://leetcode.com/problems/roman-to-integer/description/

Difficulty: Easy

Description:
Given a roman numeral, convert it to an integer.

Example 1:
Input: "III"
Output: 3

Example 2:
Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/**
 * @param {string} s
 * @return {number}
 */

let romanToInt = function(s) {
  const romansMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  let int = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = romansMap[s[i]];
    const next = romansMap[s[i + 1]];
    if (curr < next) {
      int += next - curr;
      i += 1;
    } else {
      int += curr;
    }
  }
  return int;
};
