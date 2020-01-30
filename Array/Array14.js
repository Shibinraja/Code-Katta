const input = require('readline-sync');
let Input = input.question("Enter a number: ")
// let Input2 = input.question("Enter a number: ").split(" ")


var odd = Array.from(Input);

odd.forEach(function(item){
    if(item%2!=0){
        console.log(item)
    }
})