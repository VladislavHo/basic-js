const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
    
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(typeof value !== 'undefined' ? `( ${value} )`:'()')
    return this
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if(position > 0 && position < this.chain.length){
      this.chain.splice(position - 1, 1)
      return this
    }else{
      this.chain.length = 0
      throw new Error()
    }
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse()
    return this
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let result = this.chain.join('~~')
    this.chain.length = 0
    return result
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
