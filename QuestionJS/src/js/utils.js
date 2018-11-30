//#File: QuestionJS.js
//Init File, All QuestionJS files are called from here.
var isNode = typeof global !== "undefined" 
    && ({}).toString.call(global) === '[object global]';
//Check for isNode


/////////////////////////////////////
	
if (process.env.APP_ENV === 'browser') {
    console.log("browser");
}


var utils = {};

  
utils.isNode = function() {   
	console.log(isNode);
	return isNode;
}
  
utils.getMessage = function(){
    return 'Hello utils';
}




module.exports = utils;


