/*
Task Link: https://leetcode.com/problems/judge-route-circle/description/

Difficulty: Easy

Description:

Initially, there is a Robot at position (0, 0). 
Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.
The move sequence is represented by a string. And each move is represent by a character. 
The valid robot moves are R (Right), L (Left), U (Up) and D (down). 
The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true

Example 2:
Input: "LL"
Output: false
*/

/**
 * @param {string} moves
 * @return {boolean}
 */

let judgeCircle = function(moves) {
  if(moves.length % 2 !== 0) {
    return false;
  }
  let movesCounter = {
    'U': 0,
    'D': 0, 
    'R': 0,
    'L': 0
  };
  moves.split('').forEach(move => movesCounter[move] += 1);
  const xEquality = movesCounter['R'] === movesCounter['L'];
  const yEquality = movesCounter['U'] === movesCounter['D'];
  if(xEquality && yEquality) {
    return true;
  }
  return false;
};
