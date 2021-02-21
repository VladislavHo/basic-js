const CustomError = require("../extensions/custom-error");

module.exports =  function transform(arr) {
  if (!Array.isArray(arr)) {
		throw new Error ()
	}

  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      if (arr[i] === '--discard-next') {
        newArr.pop(arr[i + 1])
        
      }
      if(arr[i] === '--discard-prev'){
        newArr.pop(arr[i+1])
        
      }
      if(arr[i] === '--double-next'){
        newArr.push(arr[i+1])
      }
      if(arr[i] === '--double-prev'){
        newArr.push(arr[i-1])
      }
      
    }
    if(typeof arr[i] === 'number'){
      newArr.push(arr[i])
    }
    
  }
  return newArr
};


