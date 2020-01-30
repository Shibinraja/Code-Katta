const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")

// Input2 = [ '1', '6', '4', '0', '3' ]

let Inputs = [...Input2].sort()

let last = Inputs[Inputs.length-1]


let smallest = Input2.indexOf(Inputs[0])


let largest = Input2.indexOf(last);


let difference = largest-smallest;

console.log(difference)