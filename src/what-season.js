const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if(!date) return 'Unable to determine the time of year!'
    try{
        date.toJSON()
    }
    catch(error){
        throw new Error(error)
    }
    const season = date.getMonth()
    let getStrSeason = (season >= 2 && season <= 4) ? 'spring' :
                    (season >=5 && season <=7) ? 'summer' :
                    (season >= 8 && season <= 10) ? 'autumn': 'winter';
    return getStrSeason

  
  // remove line with error and write your code here
};
