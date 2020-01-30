const input = require('readline-sync');
let Num_Array = input.question("Enter a number: ")
let Input1 = input.question("Enter a number: ")
let Input1s = input.question("Enter a number: ").split(" ")
let Input2 = input.question("Enter a number: ")
let Input2s = input.question("Enter a number: ").split(" ")
let Input3 = input.question("Enter a number: ")
let Input3s = input.question("Enter a number: ").split(" ")

let sort1 = Input1s.sort();
let sort2 = Input2s.sort();

let newArray = sort1.concat(sort2,Input3s);
console.log(newArray.map(Number))

