utils = require('./utils');
var XMLHttpRequest = (function() { return false; });
	
try 
{
	
	
	if (process.env.APP_ENV !== 'browser') {
		var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
		
	}
	
}
catch {

}

//#File: DataConnector.js
var DataConnector = {};

  
DataConnector.LoadJSON = (function(file,callback) {   
	if (process.env.APP_ENV !== 'browser') {
		var xobj = new XMLHttpRequest();
		//console.log(xobj);
		xobj.open('GET', file, true); 
		xobj.overrideMimeType = "application/json";
    
		xobj.onreadystatechange = function () {
			if (xobj.readyState == 4 && xobj.status == "200") {
				// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
			}
		};
		
		xobj.send(null);  
	}
})
  
DataConnector.getMessage = function(){
    return 'Hello DataConnector';
}



module.exports = DataConnector;
