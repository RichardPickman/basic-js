const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const firstArr = [...s1];
  const secondArr = [...s2];
  let result = 0;

  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr.includes(firstArr[i]) && secondArr.includes(firstArr[i])) {
      result += 1;
      const index = secondArr.indexOf(firstArr[i]);
      
      delete firstArr[i];
      delete secondArr[index];
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
