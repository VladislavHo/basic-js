const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
		throw new Error ()
	}
  if(!arr.length){
    return []
  }
let newArr = []
for (let index = 0; index < arr.length; index++) {
    switch (arr[index]) {
      case '--discard-next':
        index++
        break;
      case '--discard-prev':
        if(index > 0 && arr[index - 2] !== '--discard-next'){
          newArr.pop()
        }

        break;z
      case '--double-next':
        if(index !== arr.length - 1){
          newArr.push(arr[index + 1] )
        }
        
        break;
      case '--double-prev':
        if(index > 0 && arr[index - 2] !== '--discard-next') {
          newArr.push(arr[index - 1])
        }
        
        break;
      default:
        newArr.push(arr[index])
        break;
    }
  }
  return newArr
};




