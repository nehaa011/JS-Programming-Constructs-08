//Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum

const readline= require("readline-sync");

let num1 = parseInt(readline.question("Enter Num 1: "));
let num2 = parseInt(readline.question("Enter Num 2: "));
let num3 = parseInt(readline.question("Enter Num 3: "));

//a + b * c
let operation1 = (num1 + num2) * num3;
console.log("Operation 1 Result: ", operation1);

//c + a / b
let operation2 = (num3 + num1) / num2;
console.log("Operation 2 Result: ", operation2);

//a % b + c
let operation3 = (num1 % num2) + num3;
console.log("Operation 3 Result: ", operation3);

//a * b + c
let operation4 = (num1 * num2) + num3;
console.log("Operation 4 Result: ", operation4)


//Maximum Result 
if (operation1 > operation2 && operation1 > operation3 && operation1 > operation4){
    console.log("Maximun Result: Operation1 (" , operation1 , ")" );
}

else if (operation2 > operation1 && operation2 > operation3 && operation2 > operation4){
    console.log("Maximun Result: Operation2 (" , operation2 , ")" );
}

else if (operation3 > operation2 && operation3 > operation1 && operation3 > operation4){
    console.log("Maximun Result: Operation3 (" , operation3 , ")" );
}

else if (operation4 > operation2 && operation4 > operation3 && operation4 > operation1){
    console.log("Maximun Result: Operation4 (" , operation4 , ")" );
}


//Minimum Result
if (operation1 < operation2 && operation1 < operation3 && operation1 < operation4){
    console.log("Minimum Result: Operation1 (" , operation1 , ")" );
}

else if (operation2 < operation1 && operation2 < operation3 && operation2 < operation4){
    console.log("Minimum Result: Operation2 (" , operation2 , ")" );
}

else if (operation3 < operation2 && operation3 < operation1 && operation3 < operation4){
    console.log("Minimum Result: Operation3 (" , operation3 , ")" );
}

else if (operation4 < operation2 && operation4 < operation3 && operation4 < operation1){
    console.log("Minimum Result: Operation4 (" , operation4 , ")" );
}