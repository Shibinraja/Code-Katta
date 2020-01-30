const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")

var count = {};
if(Input==Input2.length){
for(i=0; i<Input2.length; i++){
    count[Input2[i]] = 1 + (count[Input2[i]]||0);
}

// Object.keys(count).filter(s=>{
//     console.log(count[s]==2);
// })

console.log(Object.keys(count)[Object.values(count).indexOf(2)]);
}else{
    return;
}