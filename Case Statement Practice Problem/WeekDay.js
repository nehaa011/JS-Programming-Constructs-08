//Read a Number and Display the week day (Sunday, Monday,...)

const readline = require("readline-sync");

let num = parseInt(readline.question("Enter the Day Number: "));

switch(num){

    case 1:
        console.log("Monday");
        break;
 
    case 2:
        console.log("Tuesday");
        break;
        
    case 3:
        console.log("Wednesday");
        break;
        
    case 4:
        console.log("Thrusday");
        break;
        
    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default :
        console.log("Invalid Number!");

}