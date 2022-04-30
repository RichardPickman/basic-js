const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  const repeatTimes = options.repeatTimes || 1

  for (let i = 0; i < repeatTimes; i++) {
    result += str
    const addition = options.addition || options.addition === false && 'false' || options.addition === null && 'null' || ''
    const separator = options.separator || '+'

    let additionToAdd = addition;
    let separatorToAdd = separator;

    const additionRepeatTimes = options.additionRepeatTimes || 0
    const additionSeparator = options.additionSeparator || '|'

    for (let i = 0; i < additionRepeatTimes - 1; i++) {
      additionToAdd += additionSeparator + addition
    }

    result += additionToAdd
    if (i !== repeatTimes - 1) result += separatorToAdd
  }

  return result;
}

module.exports = {
  repeater
};
