const input = require('readline-sync');
let Input = input.question("Enter a string: ").split(" ")

function swap(string){

    var one = string[0];
    var two = string[1];

    [one,two] = [two,one]

    console.log(one,two)

}

swap(Input)