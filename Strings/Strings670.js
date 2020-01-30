const input = require('readline-sync');
let Input = input.question("Enter a string: ");


Input = Array.from(Input)

function beautiful(element){


if(element.length %2 != 0){
    // console.log(element[element.length-1])
    if((element[0] == "A"|| element[0] == "a") && (element[element.length-1] == "z"|| element[element.length-1] == "Z") && (element[1] == "m"|| element[1] == "M")){

        console.log(1)

    }else{
        console.log(0)
    }

}


}
beautiful(Input)