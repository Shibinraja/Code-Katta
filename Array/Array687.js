const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")

//Input2 = ["1" ,"6", "4", "56", "56", "56", "6", "4", "2"];

// var min = Input2[0];

var minimum = Input2.sort();
console.log(minimum[1],minimum[0])