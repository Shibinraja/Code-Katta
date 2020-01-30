// const input = require('readline-sync');
// let Input = input.question("Enter a string: ")

Input = "I am shrey"

Input = Array.from(Input)
let consonants = [];
s = ""
for(let i = 0; i < Input.length; i++){

if(Input[i] == "a" || Input[i] == "e" || Input[i] == "i" || Input[i] == "o" || Input[i] == "u" || Input[i] == "A" || Input[i] == "E" ||  Input[i] == "I" || Input[i] == "O" || Input[i] == "U"){
   consonants.splice(i)
   
}else{
    consonants.push(Input[i])
}

}


console.log(consonants.join(""))