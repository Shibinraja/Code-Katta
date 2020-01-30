const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")

// Input2 = [ '95', '85', '75', '12', '11' ]

Input2 = Input2.map(Number);
var sum = 0
let Score_last = Input2.slice(2)

let Score_total = Score_last.reduce(function(score,current){

            return score + current
})

Input2.map(function(diff){
    console.log(diff - Score_total);
})
