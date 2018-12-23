/*
Task Link: https://leetcode.com/problems/verifying-an-alien-dictionary/

Difficulty: Easy

Description:
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order.
The order of the alphabet is some permutation of lowercase letters.
Given a sequence of words written in the alien language, and the order of the alphabet,
return true if and only if the given words are sorted lexicographicaly in this alien language.

Example:
Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
*/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

const isAlienSorted = function(words, order) {
  const orderMap = {};
  for (let i = 0; i < order.length; i++) {
    const letter = order[i];
    orderMap[letter] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
    const currWord = words[i];
    const nextWord = words[i + 1];
    for (let j = 0; j < currWord.length; j++) {
      const currWordChar = currWord[j];
      const nextWordChar = nextWord[j];
      if (currWordChar === nextWordChar) {
        continue;
      } else if (orderMap[currWordChar] > orderMap[nextWordChar] || !nextWordChar) {
        return false;
      } else {
        break;
      }
    }
  }
  return true;
};
