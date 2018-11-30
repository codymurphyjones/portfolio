//#File: QuestionJS.js
Answer = require('./Answer');
Question = require('./Question');
ThemeGenerator = require('./ThemeGenerator');


var obj = ThemeGenerator("test",["test","test","test","test"]);

obj.Answer_Num();

console.log(obj.GenerateHTML(1));
