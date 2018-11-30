var answer_num = 0;

class ThemeGenerator {
 
 
    //Theme Generator
    /*
    This class focuses on ensuring the HTML template that is loaded will be updated to reflect the real time data stored in the QuestionJS class
    */
  static GenerateHTML(objindex, obj_list) {
	  var obj = obj_list[objindex];
	  
	  var string = `
<h1>${obj['Text']}</h1>\n
<ul class='listBox'>
[Answers]
    <li><input type='checkbox'> I am not an answer</li>
[/Answers]
</ul>
<input type='button' value="Button" id="questionJS_button" />
<hr>`;
	 
	 var ThemeStart = string.split("[Answers]");
	 var answerTemplate = ThemeStart[1].split("[/Answers]")[0];
	 var ThemeAnswer = "";
	 var ThemeEnd = ThemeStart[1].split("[/Answers]")[1];
	 var ThemeStart = string.split("[Answers]")[0];
	 alert(ThemeStart);
	 alert(answerTemplate);
	 alert(ThemeEnd);
	 
	 for (var answer in obj["Answers"]) {
		 
		 
	 }
	
	 
	 
	 return string;
  }
  
  /*
  Below are the series of replace function used to generate the HTML, this is a sub par method that will be rewritten in the final product, this exists because I was aiming for a base understanding of my template system
  */
  //[Question]
  static QuestionReplace(str, obj) {
	  answer_num = 1;
	  
	  str = str.replace("[Question]", obj["Text"]);
	  
	  return str;
  }
  
  //[Answers]
  static AnswerLoops(str, template) {
	  new_str = str;
	  answer_num = 1;
	  
	  str.replace("[Answers]", answer_num);
	  
	  return new_str;
  }
  //[/Answers]
  
  //Inside of [Answers] Replace #
  static ReplaceAnswerNumber(str) {
	  
	  str.replace("#", answer_num);
  }
  
  
  
}
