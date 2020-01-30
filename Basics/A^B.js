const input = require('readline-sync');
let getInput = input.question("Enter your number: ").split(" ");

if(getInput[0]>5 || getInput[1]>50){
    conosle.log("Enter First number less than 5 and Second number less than 50")
}else{
    var Power = Math.pow(getInput[0],getInput[1])
}
console.log(Power)