const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let result = '';
    let letter = str[0];
    let repeat = 0;

    const appendResult = () => repeat > 1 ? result += repeat.toString() + letter : result += letter

    for (let i = 0; i < str.length; i++) {
      if (letter !== str[i]) {
        appendResult()

        letter = str[i]
        repeat = 0
      };

      if (letter === str[i]) repeat += 1;

      if (i === str.length - 1) appendResult()
    }

    return result;
}

module.exports = {
  encodeLine
};
