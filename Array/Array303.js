// const input = require('readline-sync');
// let Input = input.question("Enter a number: ")

Input = "12";
Input = Array.from(Input);

let sum = Input.map((item)=>{
    return item**2;
    
});

let Total = sum.reduce((x,y)=>{
    return x+y;
})
console.log(Total)