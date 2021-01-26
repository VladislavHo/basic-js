const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // remove line with error and write your code here
let num = parseFloat(sampleActivity);
if (typeof sampleActivity == 'string' && num > 0 && num < 15) {
  return Math.ceil(Math.log(MODERN_ACTIVITY / num) * (HALF_LIFE_PERIOD / .693));
}
return false
};
