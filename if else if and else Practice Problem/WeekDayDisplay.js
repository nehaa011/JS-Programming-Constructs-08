//Read a Number and Display the week day (Sunday, Monday,...)

const readline = require("readline-sync");

let num = parseInt(readline.question("Enter the Day Number: "));

if(num === 1){
    console.log("Monday");
}

else if(num === 2){
    console.log("Tuesday");
}

else if(num === 3){
    console.log("Wednesday");
}

else if(num === 4){
    console.log("Thrusday");
}

else if(num === 5){
    console.log("Friday");
}

else if(num === 6){
    console.log("Saturday");
}

else if(num === 7){
    console.log("Sunday");
}

else {
    console.log("Invalid Number!");
}