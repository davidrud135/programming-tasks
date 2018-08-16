/*
Task Link: https://leetcode.com/problems/uncommon-words-from-two-sentences/description/

Difficulty: Easy

Description:

We are given two sentences A and B.  (A sentence is a string of space separated words.
Each word consists only of lowercase letters.)
A word is uncommon if it appears exactly once in one of the sentences, 
and does not appear in the other sentence.
Return a list of all uncommon words. 
You may return the list in any order.
 
Example:
Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */

let uncommonFromSentences = function(A, B) {
  let uncommonWords = [];
  let wordsCounter = {};
  const allWords = A.concat(' ').concat(B).split(' ');
  allWords.forEach(word => {
    if(word in wordsCounter) {
      wordsCounter[word] += 1;
    } else {
      wordsCounter[word] = 1;
    }
  });
  for (const word in wordsCounter) {
    const value = wordsCounter[word];
    if(value === 1) {
      uncommonWords.push(word);
    }
  }
  return uncommonWords;
};
