const readline = require('readline');

    const inp = readline.createInterface({
        input: process.stdin
    });


    inp.on("line", (data) => {
        Input = data;
    });

    inp.on("close", () => {
      
      Input = Array.from(Input);

let Balance = [];

let check = Input.forEach(function(item){
    if(item == '{' || item == '(' || item == '['){

        Balance.push(item)
    }else{
        Balance.pop()
    }
})

if(Balance.length == 0){
    console.log("yes")
}else{
    console.log("no")
}

    });