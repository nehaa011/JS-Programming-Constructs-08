//Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum

const readline= require("readline-sync");

let length = parseInt(readline.question("Enter Length: "));

let select= parseInt(readline.question("Select Operation no. to be performed(1.Feet to Inch   2.Feet to Meter   3.Inch to Feet   4.Meter to Feet): "));

switch(select){
    
    case 1:
        let result1 = length*12;
        console.log(length ,"ft = ", result1,"inches.");
        break;

    case 2:
        let result3 = length/ 3.281;
        console.log(length , "ft = " , result3 , "meter.");
        break;

    case 3:
        let result2 = length/12;
        console.log(length, "inches = ", result2, "ft.");
        break;

    case 4:
        let result4 = length * 3.281;
        console.log(length , "meter = " , result4 , "ft.");
        break;

    default:
        console.log("Invalid Operation no selected!");

}

