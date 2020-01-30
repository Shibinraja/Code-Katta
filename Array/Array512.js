const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")

// Input2 = ["karthik" , "23000" , "rohan" , "81734" , "varshini" , "12343"]

 var MNC = {};
function salary(){
    
    for(let i = 0; i <Input2.length;i+=2){

            MNC[Input2[i]]=Input2[i+1];

             }
                console.log(MNC)
                
                console.log (Object.values(MNC).sort());
        }
    


salary();