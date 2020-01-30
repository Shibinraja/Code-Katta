const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")

// Input2 = ["1", "1", "1", "1", "1"];
// Input3 = ["1", "2", "3", "4", "5"];

let storage = [];

for (let i = 0;i<Input2.length;i++){
    
    for(let j = 0; j <Input3.length; j++){
        if(Input2[i]== Input3[j]){
            console.log(Input3[j]);
            break;
        }else{
            console.log(-1)
        }
}
        
    }

