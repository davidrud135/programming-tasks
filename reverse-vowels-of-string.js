/*
Task Link: https://leetcode.com/problems/reverse-vowels-of-a-string/

Difficulty: Easy

Description:
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Input: "hello"
Output: "holle"

Example 2:
Input: "leetcode"
Output: "leotcede"

Note:
The vowels does not include the letter "y".
*/

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
  let sArr = s.split('');
  let sVowelsArr = sArr.filter(letter => isVowel(letter));
  return sArr
    .map(letter => isVowel(letter) ? sVowelsArr.pop() : letter)
    .join('');
};

const isVowel = letter => ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(letter);
