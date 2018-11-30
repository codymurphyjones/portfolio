//#File: ThemeGenerator.js
//ThemeGenerator Class Definition
function ThemeGenerator(text, answers) {
    this.Text = text;
	this.Answers = answers;
    this._answer_num = 0;
    
    this.Answer_Num = function(){
       
        return this._answer_num;
    }
    
    this.GenerateHTML = function() {
	  var answers_obj = this.Answers;
      
	  var template = `
<h1>${this.Text}</h1>\n
<ul class='listBox'>
[Answers]
    <li><input type='checkbox'>{Answer}</li>
[/Answers]
</ul>
<input type='button' value="Button" id="questionJS_button" />
<hr>`;
	 
	 var ThemeStart = template.split("[Answers]");
	 var answerTemplate = ThemeStart[1].split("[/Answers]")[0];
	 var ThemeAnswer = "";
	 var ThemeEnd = ThemeStart[1].split("[/Answers]")[1];
	 var ThemeStart = template.split("[Answers]")[0];
	 
	 for (var answer in answers_obj) {
		 
		 answers_obj[answer]
         ThemeAnswer += answerTemplate.replace("{Answer}", answers_obj[answer]);
	 }
     
     
     var HTML = ThemeStart.concat(ThemeAnswer,ThemeEnd);
	 
	 return HTML;
  }
    
    return this;
};

ThemeGenerator.getMessage = function(){
    return 'Hello ThemeGenerator';
}


module.exports = ThemeGenerator;


