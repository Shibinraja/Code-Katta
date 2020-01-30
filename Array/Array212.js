// const input = require('readline-sync');
// let Input = input.question("Enter a number: ")
// let Input2 = input.question("Enter a number: ").split(" ")

Input2 = ["3","0"]
Input2 = Input2.map(Number);

function negative(){

    let sum = Input2.reduce(((r, x) => x < 0 ?  x + r: r), 0);
                console.log(sum)

};

negative()