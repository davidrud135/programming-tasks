/*
Task Link: https://leetcode.com/problems/valid-sudoku/description/

Difficulty: Medium

Description:

Determine if a 9x9 Sudoku board is valid.
Only the filled cells need to be validated according to the following rules:
Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Example:
Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Since there are two 8's in the top left 3x3 sub-box, it is invalid.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */

let isValidSudoku = function(board) {
  const boardSize = 9;
  let box1 = [];
  let box2 = [];
  let box3 = [];
  for (let i = 0; i < boardSize; i++) { 
    let currRowElements = [];
    let currColumnElements = [];
    if(i % 3 === 0) {
      box1 = [];
      box2 = [];
      box3 = [];
		}
    for (let j = 0; j < boardSize; j++) {
      // Looping and checking through boxes (3x3) and rows
      const horizontalCell = board[i][j];
      if (horizontalCell === '.') continue;
      if (currRowElements.includes(horizontalCell)) {
        return false;
      } else {
        currRowElements.push(horizontalCell);
      }
      if(j < 3) {
        if(box1.includes(horizontalCell)) {return false} else {box1.push(horizontalCell)};
      } else if (j > 5) {
        if(box3.includes(horizontalCell)) {return false} else {box3.push(horizontalCell)};
      } else {
        if(box2.includes(horizontalCell)) {return false} else {box2.push(horizontalCell)};
      }
    }
    for (let j = 0; j < boardSize; j++) {
      // Looping and checking through columns
      const verticalCell = board[j][i];
      if (verticalCell === '.') continue;
      if (currColumnElements.includes(verticalCell)) {
        return false;
      } else {
        currColumnElements.push(verticalCell);
      }
    }
  }
  return true;
};
