/*
Task Link: https://leetcode.com/problems/unique-morse-code-words/description/

Difficulty: Easy

Description:

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, 
as follows: 'a' maps to '.-', 'b' maps to '-...', 'c' maps to '-.-.', and so on.

Return the number of different transformations among all words we have.

Example:
Input: words = ['gin', 'zen', 'gig', 'msg']
Output: 2
Explanation: 
The transformation of each word is:
'gin' -> '--...-.'
'zen' -> '--...-.'
'gig' -> '--...--.'
'msg' -> '--...--.'

There are 2 different transformations, '--...-.' and '--...--.'.
*/

/**
 * @param {string[]} words
 * @return {number}
 */

let uniqueMorseRepresentations = function(words) {
  const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let wordsCodes = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let currWordCode = '';
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      currWordCode += morseCodes[alphabet.indexOf(letter)];
    }
    wordsCodes.push(currWordCode);
  }
  const uniqueCodes = wordsCodes.filter((elem, i, arr) => arr.indexOf(elem) === i);
  return uniqueCodes.length;
};

// let uniqueMorseRepresentations = function(words) {
//   const morzeTable = {
//     'a': '.-', 
//     'b': '-...',
//     'c': '-.-.',
//     'd': '-..',
//     'e': '.',
//     'f': '..-.',
//     'g': '--.',
//     'h': '....',
//     'i': '..',
//     'j': '.---',
//     'k': '-.-',
//     'l': '.-..',
//     'm': '--',
//     'n': '-.',
//     'o': '---',
//     'p': '.--.',
//     'q': '--.-',
//     'r': '.-.',
//     's': '...',
//     't': '-',
//     'u': '..-',
//     'v': '...-',
//     'w': '.--',
//     'x': '-..-',
//     'y': '-.--',
//     'z': '--..'
//   };
//   let wordsCodes = [];
//   words.forEach(word => {
//     let currWordCode = '';
//     word.split('').forEach(letter => {
//       currWordCode += morzeTable[letter];
//     });
//     wordsCodes.push(currWordCode);
//   });
//   const uniqueCodes = wordsCodes.filter((elem, i, arr) => arr.indexOf(elem) === i);
//   return uniqueCodes.length;
// };
