//#File: UI_Layer.js
jQuery = require('jQuery');
utils = require('./utils');

var UI_Layer = {};

        
  
if(!utils.isNode) {
	UI_Layer.IdOnClick = function(id, callback) {   
		jQuery(function($){
			$(id).click(function() { callback() });
		}); 
	}
}
else
{
	UI_Layer.IdOnClick = function(id, callback) {
		/*console.log(`Button {id} has been assigned`);*/
		callback();
	}
}
  
UI_Layer.getMessage = function(){
    return 'Hello UI_Layer';
}


module.exports = UI_Layer;


