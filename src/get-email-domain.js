const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const emailArr = email.split('');
  const getIndex = emailArr.lastIndexOf('@')

  return emailArr.slice(getIndex + 1, email.length).join('')
}

module.exports = {
  getEmailDomain
};
