const input = require('readline-sync');
let Input = input.question("Enter your number: ");
let Input2 = input.question("Enter your number: ").split(" ")

Empty = "";

let newArray = [Empty].concat(Input2);
delete newArray[0];

let largest = newArray[1];

for(var i=1;i<newArray.length;i++){
    if(newArray[i]>largest){
        largest = newArray[i];
    }else{
        smallest = newArray[i];
    }
}
console.log( newArray.indexOf(smallest),newArray.indexOf(largest))