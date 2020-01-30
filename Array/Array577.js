const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")

// Input2 = ["1" ,"1", "11", "121", "131", "141", "98"];

function repetition(){

var rep = Input2.map(function(repetition){
    return parseInt(repetition)
});

var Duplicates = rep.filter((index , items)=>{
    return rep.splice(index == items);
    });
    console.log(Duplicates)

}

repetition();