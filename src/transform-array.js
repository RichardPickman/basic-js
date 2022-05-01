const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`)

  const copyArr = [...arr];
  const flags = ['--discard-next', '--discard-prev', '--double-next', '--double-prev', 'remove']
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (arr[i + 1] === 'remove') continue

      copyArr[i + 1] = 'remove'
    }
    if (arr[i] === '--discard-prev') {
      if (arr[i - 1] === 'remove') continue

      copyArr[i - 1] = 'remove'
    }
    if (arr[i] === '--double-next') {
      copyArr[i] = copyArr[i + 1]
    }
    if (arr[i] === '--double-prev') {
      copyArr[i] = copyArr[i - 1]
    }
  }

  copyArr.forEach(item => {
    if (flags.includes(item) || item === undefined) return
    
    result.push(item)
  })

  return result;
}

module.exports = {
  transform
};
