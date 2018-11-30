//#File: Question.js
function Question(text, answers) {
		this.Text = text;
		this.Answers = answers;
	}
    
Question.getMessage = function(){
    return 'Hello Question';
}


module.exports = Question;



	

