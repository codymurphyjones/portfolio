//#File: QuestionJS.js
//Init File, All QuestionJS files are called from here.
//Check for isNode
utils = require('./utils');
Answer = require('./Answer');
Question = require('./Question');
ThemeGenerator = require('./ThemeGenerator');
DataConnector = require('./DataConnector')
UI_Layer = require('./UI_Layer')

/*console.log(JSON.stringify(UI_Layer));
console.log(JSON.stringify(DataConnector));
console.log(JSON.stringify(ThemeGenerator));
console.log(JSON.stringify(UI_Layer));*/


/*
var obj = ThemeGenerator("test",["test","test","test","test"]);

obj.Answer_Num();

console.log(obj.GenerateHTML(1));
*/


//#File: QuestionJS.js
function QuestionJS(dataFile, componentId) {
	this.Data_Set = [];
    
	JSONLoad = (function(data_set) { // parenthesis are not necessary

		ds = JSON.parse(data_set);
		//Add Button
		UI_Layer.IdOnClick(componentId, (function() { console.log("nice"); }));
	  
		this.Data_Set = ds;
	  
		
    }).bind(this);
    
    this.ComponentId = (function() {
        return componentId;
        }
    )
    DataConnector.LoadJSON(dataFile,JSONLoad);
}
  
QuestionJS.getMessage = function() {
    return 'Hello QuestionJS';
}

/*QuestionJS.utils = utils;
QuestionJS.Answer = Answer
QuestionJS.Question = Question
QuestionJS.ThemeGenerator = ThemeGenerator
QuestionJS.DataConnector = DataConnector
QuestionJS.UI_Layer = UI_Layer*/

console.log(JSON.stringify(QuestionJS.UI_Layer));
console.log("" + QuestionJS.UI_Layer.getMessage() + "");

//module.exports = QuestionJS;


module.exports = {
	QuestionJS: QuestionJS,
	utils: utils,
	Answer: Answer,
	Question: Question,
	ThemeGenerator: ThemeGenerator,
	DataConnector: DataConnector,
	UI_Layer: UI_Layer
}












