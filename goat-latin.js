/*
Task Link: https://leetcode.com/problems/goat-latin/description/

Difficulty: Easy

Description:

A sentence S is given, composed of words separated by spaces.
Each word consists of lowercase and uppercase letters only.

The rules of Goat Latin are as follows:

-If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.
 
-If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
 
-Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.

Return the final sentence representing the conversion from S to Goat Latin. 

Example:
Input: "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
*/

/**
 * @param {string} S
 * @return {string}
 */

let toGoatLatin = function(S) {
  const vowelLetters = ['a', 'e', 'i', 'o', 'u'];
  const wordsArr = S.split(' ');
  let resultStr = '';
  for (let i = 0; i < wordsArr.length; i++) {
    const word = wordsArr[i];
    const firstLetterIsVowel = vowelLetters.includes(word[0].toLowerCase());
    if (firstLetterIsVowel) {
      resultStr += word;
      resultStr += 'ma';
    } else {
      const lettersArr = word.split('');
      const firstLetter = lettersArr.shift();
      lettersArr.push(firstLetter);
      lettersArr.push('ma');
      resultStr += lettersArr.join('');
    }
    resultStr += vowelLetters[0].repeat(i + 1);
    if (i !== wordsArr.length - 1) resultStr += ' ';
  }
  return resultStr;
};
