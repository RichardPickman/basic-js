const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const currentRow = matrix[i];
      
      if (currentRow[j] === 0) {
        for (let b = 0; b < i; b++) {
          const prevRow = matrix[b]

          sum += prevRow[j]
        }
      }
    }
  }

  if (sum === 0) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const currentRow = matrix[i];

        sum += currentRow[j]
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
