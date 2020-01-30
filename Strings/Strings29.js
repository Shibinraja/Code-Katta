const input = require('readline-sync');
let Input = input.question("Enter a string: ").split(" ")

var strin = ""
let semi =  Input.forEach((item)=>{
    strin += item+" "

});
console.log(strin)