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
  let leftSquareItems = [];
  let middleSquareItems = [];
  let rightSquareItems = [];
  for (let x = 0; x < boardSize; x++) { 
    let currRowItems = [];
    let currColumnItems = [];
    if(x % 3 === 0) {
      leftSquareItems = [];
      middleSquareItems = [];
      rightSquareItems = [];
		}
    for (let y = 0; y < boardSize; y++) {
      // Looping and checking through squares (3x3) and rows
      const horizontalItem = board[x][y];
      if (horizontalItem === '.') continue;
      if (currRowItems.includes(horizontalItem)) {
        return false
      };
      currRowItems.push(horizontalItem);
      if (y < 3) {
        if(leftSquareItems.includes(horizontalItem)) {
          return false
        };
        leftSquareItems.push(horizontalItem);
      } else if (y > 5) {
        if(rightSquareItems.includes(horizontalItem)) {
          return false
        };
        rightSquareItems.push(horizontalItem);
      } else {
        if(middleSquareItems.includes(horizontalItem)) {
          return false
        };
        middleSquareItems.push(horizontalItem);
      }
    }
    for (let y = 0; y < boardSize; y++) {
      // Looping and checking through columns
      const verticalItem = board[y][x];
      if (verticalItem === '.') continue;
      if (currColumnItems.includes(verticalItem)) {
        return false;
      }
      currColumnItems.push(verticalItem);
    }
  }
  return true;
};
