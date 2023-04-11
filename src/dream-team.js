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
function createDreamTeam(members) {
  function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0; 
    if (a < b) return -1; 
  }
  if(members) {
    let name = [];
    for(i = 0; i < members.length; i++){
    if(typeof members[i] === 'string') name.push(members[i].trim()[0].toUpperCase())
  }
    let res = name.sort(compare).join('');
    if(res.length > 0) return res
  }
  
  return false
}

module.exports = {
  createDreamTeam
};
