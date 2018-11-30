class QuestionJS {
	
  SetData(json_obj) {
	  alert("I made it");
	  Data_Set = json_obj;
  }
  
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
 
 loadText(file,callback) {   
	/*var reader = new FileReader();
	var file = new File([],file);
	reader.onload = function(e) {
		alert(reader.result);
	}

	reader.readAsText(file);*/
 }
	
  constructor(dataFile) {
	this.Data_Set = [];
    //this.loadJSON(dataFile,this.SetData);
	this.loadText(dataFile,this.SetData);
  }
  
  JSONLoad(data_set) {
	  alert(data_set);
  }
}
