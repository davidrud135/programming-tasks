/*
Task Link: https://telegra.ph/UniLecs-121-cAPS-LOCK-08-27

Difficulty: Easy

Description:
Given string, containing latin letters, numbers and characters (space, dash, exclamation marks, comma and dot).
You need to change letters case to opposite.

Example:
Input: 'cAPS LOCK'
Output: 'Caps lock'
*/

/**
 * @param {string} str
 * @return {string}
 */

const fixCapsLockString = function(str) {
  return str
    .split('')
    .map(char => (char === char.toUpperCase()) ? char.toLowerCase() : char.toUpperCase())
    .join('');
};
