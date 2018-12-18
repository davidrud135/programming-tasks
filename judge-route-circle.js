/*
Task Link: https://leetcode.com/problems/robot-return-to-origin/

Difficulty: Easy

Description:
There is a robot starting at position (0, 0), the origin, on a 2D plane.
Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
The move sequence is represented by a string, and the character moves[i] represents its ith move.
Valid moves are R (right), L (left), U (up), and D (down).
If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

Example:
Input: "UD"
Output: true 
Explanation: The robot moves up once, and then down once.
All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
*/

/**
 * @param {string} moves
 * @return {boolean}
 */

const judgeCircle = function(moves) {
  const movesAmount = moves.length;
  if (movesAmount % 2 !== 0) return false;
  let x = 0;
  let y = 0;
  for (let i = 0; i < movesAmount; i++) {
    switch (moves[i]) {
      case 'U': y += 1; break;
      case 'D': y -= 1; break;
      case 'R': x += 1; break;
      case 'L': x -= 1;
    }
  }
  return !x && !y;
};
