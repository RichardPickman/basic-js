const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(digit) {
  return Array.from(digit.toString()).reduce((acc, item, index, arr) => {
    let number = '';

    for (let i = 0; i < arr.length; i++) {
      if (index !== i) number += arr[i]
    }

    if (acc < number) return acc = parseInt(number)
    else return acc
  }, 0)
}

module.exports = {
  deleteDigit
};
