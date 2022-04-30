const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainMap = {};
  let domainsArr = []

  domains.forEach(dom => {
    domainsArr = dom.split('.');
    let domain = '.' + domainsArr[domainsArr.length - 1];

    for (let i = domainsArr.length - 1; i >= 0; i--) {
      if (!domainMap[domain]) domainMap[domain] = 1;
      else if (domainMap[domain]) domainMap[domain] += 1;
      
      domain = domain + '.' + domainsArr[i - 1]
    }
  })
  
  
  return domainMap;
}

getDNSStats(['epam.com'])

module.exports = {
  getDNSStats
};
