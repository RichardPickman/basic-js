const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(cats) {
    let amount = 0;

    for (const value of cats) {
      value.forEach(elem => {
        if (elem === '^^') amount += 1;
      });
    }

    return amount;
}

module.exports = {
  countCats
};
