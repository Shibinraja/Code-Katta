// const input = require('readline-sync');
// let Input = input.question("Enter a string: ");

Input = "dabbc"
Input =Array.from(Input);

function repeated(satisfy){

for(let i=0; i <satisfy.length; i++){

    repeated = 0;

    for(let j=0; j<satisfy.length ; j++){

        if(i != j && satisfy[i] == satisfy[j]){

            repeated = 1;
            
            }
        }
            if(repeated > 1){
    
                console.log((satisfy[i]))
            }

    }
}


repeated(Input)