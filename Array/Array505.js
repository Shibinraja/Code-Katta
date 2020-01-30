const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")

// Input2 = ["3", "9", "1", "44", "6"];

Input2 = Input2.map(Number);

let sliced = Input2.splice(0,3);

let sliced2 = sliced.shift()

let newArray = sliced.sort();

let newArray2 = newArray.push(sliced2)

let tesseract = newArray.concat(Input2);
console.log(tesseract)