const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")

Input2 = Input2.map(Number);

let sort = Input2.sort();

console.log(sort)