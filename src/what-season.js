const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!(date instanceof Date)) throw new Error('Invalid date!');
  if (arguments.length < 1) return 'Unable to determine the time of year!';
  let seasons = ['winter', 'spring', 'summer', 'autumn', 'winter'];
  let month = date.getMonth();
  let index = Math.floor((month + 1)/3);
  return seasons[index]
}

module.exports = {
  getSeason
};
