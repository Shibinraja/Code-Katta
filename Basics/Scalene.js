const input = require('readline-sync');
let Input = input.question("Enter your number: ");
let Input2 = input.question("Enter your number: ");
let Input3 = input.question("Enter your number: ");

if(Input!=Input2!=Input3){
    console.log("yes")
}else{
    console.log("no")
}