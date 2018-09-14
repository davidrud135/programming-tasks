/*
Task Link: https://leetcode.com/problems/maximum-product-of-word-lengths/description/

Difficulty: Medium

Description:
Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters.
You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:
Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16 
Explanation: The two words can be "abcw", "xtfn".

Example 2:
Input: ["a","aa","aaa","aaaa"]
Output: 0 
Explanation: No such pair of words.
*/

let maxProduct = function(words) {
  let productsArr = [0];
  for (let i = 0; i < words.length; i++) {
    const currWord = words[i];
    for (let j = i + 1; j < words.length; j++) {
      const otherWord = words[j];
      if(dontHaveCommonLetters(currWord, otherWord)) {
        productsArr.push(currWord.length * otherWord.length);
      }
    }
  }
  return productsArr.sort((a, b) => b - a)[0];
};

let dontHaveCommonLetters = function(word1, word2) {
  for (let i = 0; i < word1.length; i++) {
    if(word2.includes(word1[i])) {
      return false;
    }
  }
  return true;
};
