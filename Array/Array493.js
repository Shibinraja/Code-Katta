const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")


var Mark = Input2.forEach((mark)=>{
    if(mark === Input){
       console.log(Input2.indexOf(mark));
    }
    else{
        console.log(-1)
        
    }
})