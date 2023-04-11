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
  let res = '';
  let count = 1;
  if (str.length <= 1) return str;
  for (let i = 1; i < str.length; i++) {
    if (str[i] == str[i - 1]) {
      count++
    } else {
      res += count > 1 ? `${count}${str[i - 1]}` : `${str[i - 1]}`;
      count = 1
    }
  }
  res += count > 1 ? `${count}${str[str.length - 1]}` : `${str[str.length - 1]}`;
  return res
}

module.exports = {
  encodeLine
};
