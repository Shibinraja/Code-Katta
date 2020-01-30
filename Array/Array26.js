const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")

//Input2 = ["1", "2", "3", "3"];

let check = Input2.forEach((item)=>{
    if(item == Input){
        console.log("yes")
    }
})