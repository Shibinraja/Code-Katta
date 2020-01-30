const input = require('readline-sync');
let Input = input.question("Enter a string: ").split(" ")

function swap(){
    temp = Input[0];
    Input[0] = Input[1];
    Input[1] = temp;

    console.log(Input[0], Input[1]);
}

swap();

