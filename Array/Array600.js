const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")
let Input3 = input.question("Enter a number: ").split(" ")


let Combine = Input2.concat(Input3);

Combines = Combine.map(Number);

let sort = Combines.sort((a, b) => a-b)

if(sort.length%2==0){
    let middle = sort.slice(4,6)
    // console.log(middle)
    middle.reduce((acc, curr) =>{

        console.log(acc + curr)
    })
}
