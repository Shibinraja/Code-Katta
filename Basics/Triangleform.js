const input = require('readline-sync');
let Input = input.question("Enter your number: ").split(" ")

function Triangle(){
    if(Input[0]<Input[1] && Input[1]<Input[2] && Input[2]>Input[0]){
        console.log("yes")
    }else{
        console.log("no")
    }
}

Triangle()