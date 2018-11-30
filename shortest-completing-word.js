/*
Task Link: https://leetcode.com/problems/shortest-completing-word/

Difficulty: Easy

Description:
Find the minimum length word from a given dictionary words, which has all the letters from the string licensePlate.
Such a word is said to complete the given string licensePlate
Here, for letters we ignore case. For example, "P" on the licensePlate still matches "p" on the word.
It is guaranteed an answer exists. If there are multiple answers, return the one that occurs first in the array.
The license plate might have the same letter occurring multiple times.
For example, given a licensePlate of "PP", the word "pair" does not complete the licensePlate, but the word "supper" does.

Example:
Input: licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
Output: "steps"
Explanation: The smallest length word that contains the letters "S", "P", "S", and "T".
Note that the answer is not "step", because the letter "s" must occur in the word twice.
Also note that we ignored case for the purposes of comparing whether a letter exists in the word.
*/

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */

String.prototype.hasAllLettersFromString = function(requiredLettersStr) {
  let lettersArr = this.valueOf().split('');
  if (requiredLettersStr.length > lettersArr.length) return false;
  for (let i = 0; i < requiredLettersStr.length; i++) {
    const requiredLetter = requiredLettersStr[i];
    if (!lettersArr.includes(requiredLetter)) {
      return false;
    } else {
      const indexOfRequiredLetter = lettersArr.indexOf(requiredLetter);
      lettersArr.splice(indexOfRequiredLetter, 1);
    }
  }
  return true;
};

shortestCompletingWord = function(licensePlate, words) {
  const licensePlateLetters = licensePlate.toLowerCase().replace(/[^a-z]/g, '');
  const completingWords = words.filter(word => word.hasAllLettersFromString(licensePlateLetters));
  if (completingWords.length === 1) return completingWords[0];
  const completingWordsLengths = completingWords.map(word => word.length);
  const shortestCompletingWordIndex = completingWordsLengths.indexOf(Math.min(...completingWordsLengths));
  return completingWords[shortestCompletingWordIndex];
};
