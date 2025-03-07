//Write a program that takes a input and determines if the number is a prime.

const readline = require ("readline-sync");

let num = parseInt(readline.question("Enter a Number: "));

if (num < 2) {
    console.log(num, "is NOT a Prime Number.");
}
else {
    let count =0;
    for(let i=1 ; Math.sqrt(num); i++){
        if (num%i === 0){
            count++;
        }
    }

    if(count === 2){
        console.log(num ," is a Prime Number.");
    }
    else{
        console.log(num, " is not a Prime Number.");
    }

}