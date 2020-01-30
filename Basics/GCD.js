const input = require('readline-sync');
let Input = input.question("Enter your number: ");
let Input2 = input.question("Enter your number: ");


if(Input%1 !=0 || Input2%1!= 0){return -1}
while( Input2 != 0){
    var remainder = Input%Input2;
    Input = Input2;
    Input2 = remainder;

}

console.log(Input)

// function gcd(number1,number2){
//     if(number2 ==0){return number1}
// else{
//     var remainder = number1%number2;
//     return gcd(number2,remainder);
// }
// }

// console.log(gcd(10,5))


