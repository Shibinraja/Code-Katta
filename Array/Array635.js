const input = require('readline-sync');
let Input = input.question("Enter a number: ")
let Input2 = input.question("Enter a number: ").split(" ")


function smallest(){
   y = (Input2.map(Number))
   if(Input==Input2.length){
    for (i=0;i<y.length;i++){
        next = -1;
        for (j=i+1;j<y.length;j++){
            if(y[i]>y[j]){
               next = y[j];
               break;
            }
        };
        console.log(next)
    };
   }else{
       return;
   }
};

smallest();
