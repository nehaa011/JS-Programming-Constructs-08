//Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.

let day = parseInt(process.argv[2]);
let month = parseInt(process.argv[3]);

if( month === 3 && day >= 20 || month === 6 && day<=20 || month>3 && month <6){
    console.log("True");
}
else{
    console.log("False");
}