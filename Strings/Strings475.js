// const input = require('readline-sync');
// let Input = input.question("Enter a string: ")

Input = "I was born on 12 october 1998";

function num(str){

    var num = str.match(/[0-9]+/g);

    num = num.sort();

    console.log(parseInt(num[num.length-1]))
}

num(Input)