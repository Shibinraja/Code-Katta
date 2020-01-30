const input = require('readline-sync');
let Input = input.question("Enter a string: ");

function reverse(rev){

    revs = ""
    for(let i = 0; i <rev.length; i++){
        revs= rev[i] + revs
}

console.log(revs)
};

reverse(Input) 