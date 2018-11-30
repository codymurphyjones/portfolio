//#File: Answer.js
var Answer = {};

function Answer(text, isCorrect=false) {
        alert("Yay me")
		this.Text = text;
		this.isCorrect = isCorrect;
}

Answer.getMessage = function(){
    return 'Hello Answer';
}



module.exports = Answer;


