const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")

// Input2 = ["3" ,"4", "9", "1", "6"];

var min = Input2[0]
for(index = 1; index < Input2.length; index++){
    if((Input2[index])<min){
        min = Input2[index];
        break;
    }
}
console.log(min)

var minimum = Input2.forEach(function(x){

    if(x<min){
        console.log(x);
    }
})

