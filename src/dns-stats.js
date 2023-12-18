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
  let arrays = domains.map((item) => item.split('.').reverse());
  let res = [];
  arrays.forEach((arr) => {
    for (let i = 1; i < arr.length + 1; i++) {
        res.push('.' + arr.slice(0, i).join('.'))
    }
  });
  let counted = {};
  res.forEach((item) => {
    if (Object.keys(counted).includes(item)) {
        counted[item] += 1
    } else {
        counted[item] = 1
    }
  })
  return counted
}

module.exports = {
  getDNSStats
};
