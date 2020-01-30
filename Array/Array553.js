const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")

 //Input2 = ["A23" ,"B56", "B56", "C79", "D16"];

function repetition(){
    if(Input==Input2.length){
     for (i=0;i<Input2.length;i++){
         for (j=i+1;j<Input2.length;j++){
             if(Input2[i]===Input2[j]){
                 Input2.splice(j,1);
                 break;
             };
            };
        };
        console.log(Input2)
    }else{
        return;
    };
};
repetition();

var Duplicates = Input2.filter((index , items)=>{
return Input2.indexOf(index) == items;
});
console.log(Duplicates)
