const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let arr = []
if(members.length === null || members === undefined){
  return false
}
  for (let i = 0; i < members.length; i++) {
    if(typeof(members[i]) === 'string'){
      arr.push(members[i][0]).toUpperCase()
    }
  
  }
  return arr.sort().join('')
};
