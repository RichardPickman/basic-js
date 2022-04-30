const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(names) {
  if (!Array.isArray(names)) return false

  const sortedArray = names.filter(item => typeof item === 'string' && item)
  let dreamTeamName = '';

  for (const name of sortedArray) {
    dreamTeamName += Array.from(name.trim())[0].toUpperCase()
  }

  return Array.from(dreamTeamName).sort().join('');
}

module.exports = {
  createDreamTeam
};
