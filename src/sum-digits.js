const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numberArr = n.toString().split('')
  let result = n;

  while (result.toString().length > 1) {
    let temp = 0;
    for (let i = 0; i < numberArr.length; i++) {
      temp += parseInt(numberArr[i])
    }

    if (temp.toString().length > 1) numberArr = temp.toString().split('')

    result = temp
  }

  return result
}

module.exports = {
  getSumOfDigits
};
