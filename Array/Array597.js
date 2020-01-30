// const input = require('readline-sync');
// let Input = input.question("Enter a number: ")
// let Input2 = input.question("Enter a number: ").split(" ")

Input2 = ["5" ,"25", "35", "-5", "30"];
var sum =0
var Beautiful = Input2.map(function(total){
    return parseInt(total)
});


var Total = Beautiful.forEach(function(sums){
    return sum += sums;
})

if(sum%2==0 || sum%3==0 || sum%5==0){
    console.log(1)
}else{
    console.log(0)
}