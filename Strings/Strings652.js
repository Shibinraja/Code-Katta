const input = require('readline-sync');
let Input = input.question("Enter a string: ");

function Ascii(vowel){
let check = [];
    for(let i=0; i<vowel.length; i++){

        if(vowel[i]=="a" || vowel[i]=="e" || vowel[i]=="i" || vowel[i]=="o" || vowel[i]=="u"){

            check.push(vowel[i])
        }

    }
    
let char = check.map(char=>char.charCodeAt(0));
let ascii = char.reduce((a,b)=>a+b);

// console.log(ascii)


if(ascii % 8 !=0){
    console.log(0)
}else{
    console.log(1)
}

};

Ascii(Input)

