const input = require('readline-sync');
let Input = input.question("Enter a number: ")

Input = parseInt(Input);



function pattern(){
    for(let i = 1; i <=Input; i++){
        result = ""
        for(let j = 1; j <=i; j+=1){
            (result+=1)
        }
        console.log(result)
    }

}

pattern()