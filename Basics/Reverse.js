const input = require('readline-sync');
let Input = input.question("Enter a string: ").split(" ")

Input = ["3","2","1","2","3"];
var swap = "";

function reverse(){
    for(i=0;i<Input.length-1;i+=2){
        let last = Input[Input.length -1]
        swap+= Input[i+1]+Input[i]
        var swaplast = swap +last
        
    }
    console.log(swaplast)

};


reverse();