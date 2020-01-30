const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")

var sort = Input2.filter((item,index) =>{
    return Input2.indexOf(item)==index;
})

var reverse = (sort.reverse());

reverse.map((item)=>{
    console.log(parseInt(item))
})