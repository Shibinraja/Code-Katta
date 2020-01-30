const input = require('readline-sync');
let Input = input.question("Enter a string: ");

Input = Array.from(Input);

let last = Input.pop();
last= last.toUpperCase();
let size = Input.length

rev = ""
for(let i = size-1; i >=0; i--){
    var item = (rev+= Input[i])

}
console.log(last+item);