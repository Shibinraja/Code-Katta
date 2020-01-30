const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")

//Input2 = ["4" ,"0", "2", "1", "3"];
Input2 = Input2.map(Number)
function arrange(){
    for(let i = 0; i < Input2.length;i++){
        Input2[i] += (Input2[Input2[i]]%Input2.length)*Input2.length
    };
    
    for(let i=0;i<Input2.length;i++){
        Input2[i] /= Input2.length
        console.log(Math.floor(Input2[i]))
    };
        

}
arrange()