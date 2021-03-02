const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, counter = 1) {
    if (arr.some(elem => Array.isArray(elem))) {
      let inside = arr.flat()

      return this.calculateDepth(inside) + counter
      
    } else {
      return counter
    }
  }
};