//Find the Magic Number

const readline = require("readline-sync");

console.log("Think of a number between 1 and 100...");

let low = 1, high = 100, mid;
let response = "";

while (low <= high) {
    mid = Math.floor((low + high) / 2);
    response = readline.question(`Is your number greater than ${mid}? (yes/no): `);

    if (response.toLowerCase() === "yes") {
        low = mid + 1;
    } else {
        high = mid;
    }
}

console.log(`Your magic number is: ${low}`);




