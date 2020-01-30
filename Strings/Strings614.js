// const input = require('readline-sync');
// let Input = input.question("Enter a string: ");

Input = "wows"


//Input = Array.from(Input)

function palindrome(get){

var newstring = "";

for(let i = get.length -1; i >=0; i--){


newstring += get[i]


};

if(newstring == get){
    console.log(1)
}else{
    console.log(0)
}

}
palindrome(Input)