// const input = require('readline-sync');
// let Input = input.question("Enter a string: ");
Input = "as"

Input = Input.toLowerCase();

Inputs = Array.from(Input);

let vowel = ["a", "e", "i", "o", "u",]

function vowels(char){

for(let index =0; index < Inputs.length; index++){

    if(Inputs[index] == "a" || Inputs[index] == "e" || Inputs[index] == "i" || Inputs[index] == "o" || Inputs[index] == "u"){
        result = "yes"
        
    }else{
        result = "no"
    }
}

console.log(result)

// let check = char.forEach(function(item){
//     if(item == "a" || item == "e" || item == "i" || item == "o" || item == "u"){
//        return result = "yes"
//     }else{
//         return result = "no"
//     }
// });
// console.log(result)

};

vowels(Inputs)