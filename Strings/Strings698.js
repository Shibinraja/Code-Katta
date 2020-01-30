// const input = require('readline-sync');
// let Input = input.question("Enter a string: ");

Input = "ABC"
Input = Array.from(Input)


function beautiful(rev){

    flag =0;
if(rev.length > 3){

    return;
}else{
   for(let i = 0; i < rev.length; i++){

    if(rev[i] != rev[(i+1) % rev.length]){

        flag = 1
    }else{

        flag = 0;
        break;
        
    }

   } 
   if(flag == 1){
       console.log(1)
   }else{
       console.log(0)
   }


}
};

beautiful(Input) 