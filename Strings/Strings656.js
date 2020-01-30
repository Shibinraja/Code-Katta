const input = require('readline-sync');
let Input = input.question("Enter a string: ")

Input = Array.from(Input);

let Balance = [];

let check = Input.forEach(function(item){
    if(item == '{' || item == '(' || item == '['){

        Balance.push(item)
    }else{
        Balance.pop()
    }
})

if(Balance.length == 0){
    console.log(1)
}else{
    console.log(0)
}
