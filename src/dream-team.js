const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(team) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let arr = []
  if(team == undefined || team === null || typeof(team) === 'boolean'){
    return false
  }
for (let i = 0; i < team.length; i++) {
  if(typeof(team[i]) === 'string'){
    arr.push(team[i][0])
  }

}
return team.length === 0 ? false : arr.sort().join('').toUpperCase().toString()

};
