const input = require('readline-sync');
let Input = input.question("Enter a string: ");


function revers(rev){

    revs = ""
    for(let i = 0; i <rev.length; i++){
        revs= rev[i] + revs
}

revs = ((revs).split(" "))

console.log(...revs.reverse())
};

revers(Input) 