const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let arr = []
  if(members == undefined || members === null || typeof(members) === 'boolean'){
    return false
  }
for (let i = 0; i < members.length; i++) {
  if(typeof(members[i]) === 'string'){
    arr.push(members[i][0].trim().toUpperCase())
  }

}
return members.length === 0 ? false : arr.sort().join('')

};
