const input = require('readline-sync');
let Input = input.question("Enter your number: ");
let Input2 = input.question("Enter your number: ");
let Input3 = input.question("Enter your number: ").split(" ");

count = 0;
counter = 0

for(k = 0; k < Input3.length;k++){
   if(Input3[k]==Input2){
       count++;
   }
else{
    counter++;
}

}

if(counter == Input3.length){
    console.log(-1)
}else{
    console.log(count)
}

