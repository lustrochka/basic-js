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
  let controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let res = arr.slice(0);
  for (let i = 0; i < res.length; i++) {
    if (controls.includes(arr[i])) {
      switch (controls.indexOf(res[i])) {
        case 0:
          if(res[i + 1]) res.splice(i + 1, 1);
          res.splice(i, 1)
          break;
        case 1:
          if(res[i - 1]) {
            res.splice(i - 1, 1);
            res.splice(i - 1, 1);
          } else res.splice(i, 1)
          break;
        case 2:
          if(res[i + 1]) res.splice(i + 1, res[i + 1]);
          res.splice(i, 1)
          break;
        case 3:
          res.splice(i, 1)
          if(res[i - 1]) res.splice(i, res[i - 1]);
          break;
      }
    }
  }
  return res
}

module.exports = {
  transform
};
