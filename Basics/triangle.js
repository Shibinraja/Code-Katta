const input = require('readline-sync');
let Input = input.question("Enter your number: ").split(" ");

AreaofTriangle = 0.5*Input[0]*Input[1];
console.log(AreaofTriangle);
