const readline = require("readline-sync");

function celsiusToFahrenheit(degC) {
    return (degC * 9/5) + 32;
}

function fahrenheitToCelsius(degF) {
    return (degF - 32) * 5/9;
}

console.log("Temperature Conversion: ");
console.log("1: Celsius to Fahrenheit");
console.log("2: Fahrenheit to Celsius");

let choice = parseInt(readline.question("Enter your choice (1 or 2): "));

switch (choice) {
    case 1:
        let degC = parseFloat(readline.question("Enter temperature in Celsius (0 to 100): "));
        if (degC < 0 || degC > 100) {
            console.log("Invalid input! Enter temperature between 0 and 100°C.");
        } else {
            console.log(degC ,"°C = ",celsiusToFahrenheit(degC), "°F");
        }
        break;

    case 2:
        let degF = parseFloat(readline.question("Enter temperature in Fahrenheit (32 to 212): "));
        if (degF < 32 || degF > 212) {
            console.log("Invalid input! Enter temperature between 32 and 212°F.");
        } else {
            console.log(degF , "°F = ",fahrenheitToCelsius(degF), "°C");
        }
        break;

    default:
        console.log("Invalid choice! Please enter 1 or 2.");
}
