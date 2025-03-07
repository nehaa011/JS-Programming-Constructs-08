//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const readline = require("readline-sync");

let num = parseInt(readline.question("Enter a number (1, 10, 100, 1000, etc.): "));

switch(num){
    case 1:
        console.log("Unit");
        break;

    case 10:
        console.log("Ten");
        break;

    case 100:
        console.log("Hundred");
        break;

    case 1000:
        console.log("Thousand");
        break;

    case 10000:
        console.log("Ten Thousand");
        break;
        
    case 100000:
        console.log("Lakh");
        break;

    case 1000000:
        console.log("Ten Lakh");
        break;

    case 10000000:
        console.log("Crore");
        break;

    default:
        console.log("Invalid input! Enter a valid place value (1, 10, 100, 1000, etc.).");
} 
