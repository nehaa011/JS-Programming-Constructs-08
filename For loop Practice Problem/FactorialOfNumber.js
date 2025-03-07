//Write a program that computes a factorial of a number taken as input.

const readline = require ("readline-sync");

let num = parseInt(readline.question("Enter a Number: "));

let result = "Factorial of "+ num + "!= ";
let total=1;
for (let i=1 ; i<=num; i++){
    result += i;
    if(i<num){
        result += " * ";
    }
    total *= i;
}

console.log (result , " = ", total);