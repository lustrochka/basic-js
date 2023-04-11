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
  let main = new Array(options['repeatTimes'] || 1);
  let string = str;
  if (options['addition'] !== undefined) {
    let addition = new Array(options['additionRepeatTimes'] || 1);
    addition.fill(options['addition'] + '');
    string += addition.join(options['additionSeparator'] || '|')
  }
  main.fill(string);
  return main.join(options['separator'] || '+')
}

module.exports = {
  repeater
};
