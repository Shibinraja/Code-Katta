const input = require('readline-sync');
let Input = input.question("Enter a string: ")


Input = Array.from(Input);

for(let i = 0;i<Input.length;i++){

    if(Input[i] == Input[i+1]){

        console.log(-1);
        break}
        
        else{

            console.log(0)
        }

}


