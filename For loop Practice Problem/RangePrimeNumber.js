//Extend the program to take a range of number as input and output the Prime Numbers in that range.

const readline = require ("readline-sync");

let range = parseInt(readline.question("Enter a Number: "));

if(range <2){
    console.log("Invalid Range!");
}

else{
    console.log("The Prime No. From 2 to ", range , "are: ");
    for (let n = 2; n <= range; n++){
        let count=0;
        for(let i=1 ; i<= n; i++){
            if (n %i === 0){
                count++;
            }
        }
        if (count === 2){
            console.log(n);
        }
    }

}


