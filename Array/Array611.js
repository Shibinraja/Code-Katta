const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")


// Input2 = ["1" ,"2", "3", "4", "6", "0", "0"];
Input2 = Input2.map(Number)

let sliced = Input2.slice(0,3)

let sliced2 = Input2.slice(4)

let Total1 = sliced.reduce((a,b)=>{
    return a+b;
});

let Total2 = sliced2.reduce((b,a)=>{
    return b+a;
});

if(Total1 == Total2){
    console.log(1)
}else{
    console.log(0)
}