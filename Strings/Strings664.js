const input = require('readline-sync');
let Input = input.question("Enter a string: ").split(" ")

Input = ["abcd" , "efgh" ,"ijkl"]

// Input = Input.toString();
 s = ""
for(let j =0; j <Input.length;j++){
    if(j%2 == 0){
        var str = Input[j].toUpperCase();
        Input[j] = str;
        s+= str+" "
    }else{
        var str = Input[j].toLowerCase();
        Input[j] = str;
        s+= str+" "
    }
    
    
}
console.log(s)

// s = ""
// for(let j =0; j <Input.length;j++){
//     if(j%2 == 0){
//         var str = Input[j].toUpperCase();
//         s += str + " "
//     }else{
//         s+= Input[j] + " "
//     }
    
    
// }
// console.log(s)
