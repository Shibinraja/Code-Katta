const input = require('readline-sync');
let Input = input.question("Enter a string: ").split(" ")

// Input = Input.toString();

let adjacent = [];

for (let i = 0; i < Input.length;i++){
    
    
    if(adjacent[adjacent.length-1] == Input[i]){

        adjacent.pop()
    }else{
        adjacent.push(Input[i]);
    }
}
console.log(...adjacent)
