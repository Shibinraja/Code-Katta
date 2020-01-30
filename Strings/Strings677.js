// const input = require('readline-sync');
// let Input = input.question("Enter a string: ").split(" ")

Input = ["5", "abc aba abc aab"]

No = parseInt(Input[0])
Inputs = Input[1].split(" ")


let n = 1
let s = "";
function username(input1, input2) {
    if (input1 == Inputs.length) {

        let verify = input2.filter((item, index) => {


            if (input2.indexOf(item) != index) {

                s += item + n + " ";
                n++;

            } else {

                s += ("Verified") + " ";
            }


        });

        console.log(s)

    }

else {

    return;
}

};
username(No, Inputs)