const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")



for(k=0;k<Input2.length;k++){
    if(Input2[k+1]-Input2[k]>Input){
        console.log(1)
    }else{
        console.log(0)
    }
}



