const input = require('readline-sync');
let Input = input.question("Enter a string: ")

Input = Array.from(Input);
let mid1 = "*";
    mid2 = "*";

if(Input.length % 2 == 0){

    Input[Input.length/2] = mid1
    Input[(Input.length/2)-1] = mid2;

    console.log(Input.join(""))
}else{

    Input[(Input.length-1)/2] = mid1;
    console.log(Input.join(""))


}
