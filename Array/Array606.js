const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")

Input2 = [" 1", " 6", "4" ,"56" , "56" , "56" , "6" , "4" , "2"]
var rep = Input2.map(function(repetition){
    return parseInt(repetition)
});

var Duplicates = rep.filter((index , items)=>{
   return rep.splice(index<=4);
    
});
console.log(Duplicates)