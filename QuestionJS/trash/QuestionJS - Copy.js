var ds = [];//Data Set Variable
var question_index = 0;//Active Question Index (should be in HTML maybe?)

/*
Hey @Client

The current code base is in a very infant state, I am in the middle of building out all the required components but I did want to show that I have been working on this project.

This javascript implementation will be pulled into your shopify website and once completed should essentially be a plug and play set up.
*/


class QuestionJS {

  //Loading my JSON file until we have a better data import
  loadJSON(file,callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
			
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
 
 //Generates the HTML data for the template format
  GenerateHTML() {
	  var obj = ds[question_index];
	  
	  var string = `<h1>` + obj["Text"] + `</h1>\n
      <ul>
		<li><input type='checkbox'> I am not an answer</li>
		<li><input type='checkbox'> I am an answer</li>
		<li><input type='checkbox'> I am an answer</li>
		<li><input type='checkbox'> I am an answer</li>
	  </ul>
	  <input type='button' value="Button" id="questionJS_button" />
	  <hr>
	 `;
	 
	 ThemeGenerator.GenerateHTML(question_index, ds);
	 
	 return string;
  }
 
 
  //Constructs the QuestionJS implementation.
  constructor(dataFile) {
	this.Data_Set = [];
	var JSONLoad = (function(data_set) { // parenthesis are not necessary

      ds = JSON.parse(data_set);
	  $("#questionJS_button").click(function() { alert("test"); });
	  
	  this.Data_Set = ds;
	  
	  $("#questionJS").html(this.GenerateHTML());// but might improve readability
    }).bind(this);
	
    this.loadJSON(dataFile,JSONLoad);
	
	
  }
  
  
  
}
