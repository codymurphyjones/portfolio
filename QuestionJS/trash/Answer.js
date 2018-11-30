
/*(function() {
 
  class Answer {
      
    constructor(text, isCorrect=false)
	{
        alert("Yay me")
		this.Text = text;
		this.isCorrect = isCorrect;
	}
  }
});

var an = new Answer("test", false);*/

//#File: Answer.js
var Answer = {};
toExport.getMessage = function(){
    return 'Hello Webpack';
}

toExport.constructor = function(text, isCorrect=false) {
        alert("Yay me")
		this.Text = text;
		this.isCorrect = isCorrect;
}

module.exports = Answer;


