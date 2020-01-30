const input = require('readline-sync');
let Input = input.question("Enter your number: ");
let Input2 = input.question("Enter your number: ").split(" ");

and = 0;
for(i=1;i<Input2;i++){
    and &= Input2[i]
}
console.log(and)


