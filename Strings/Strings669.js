const input = require('readline-sync');
let Input = input.question("Enter a string: ")

Input = Array.from(Input);

and = ""

console.log(Input)

function repetition(){
    
    for(let i = 0; i < Input.length;i++){

            if(Input[i]!= Input[0]){
                and+= Input[i]
                Input[0] = Input[0]
            }
     
        };
        console.log(and)

    }
repetition();