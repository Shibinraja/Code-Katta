// const input = require('readline-sync');
// let Input = input.question("Enter a number: ").split(" ")

Input = ["3", "4"]

Input = Input.map(Number)
pow = 1;

function power() {

for(i=0;i<Input.length;i++){
    pow*= Input[i] ** Input[i+1];
    break;
}
console.log(pow)



};

power();