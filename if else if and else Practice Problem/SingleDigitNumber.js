//Read a single digit number and write the number in word

const readline= require("readline-sync");

let num = parseInt(readline.question("Enter a single-digit number: "));

    if(num === 0){
        console.log("Zero");
    }

    else if(num === 2){
        console.log("Two");
    }

    else if(num === 3){
        console.log("Three");
    }

    else if(num === 4){
        console.log("Four");
    }

    else if(num === 5){
        console.log("Five");
    }

    else if(num === 6){
        console.log("Six");
    }

    else if(num === 7){
        console.log("Seven");
    }

    else if(num === 8){
        console.log("Eight");
    }

    else if(num === 9){
        console.log("Nine");
    }

    else{
        console.log("Invalid input! Please enter a number between 0 and 9.");
    }

