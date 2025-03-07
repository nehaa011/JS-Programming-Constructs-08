//a function to check if the two numbers are Palindromes

function isPalindrome(num) {
    let original = num.toString();
    let reversed = original.split('').reverse().join('');
    return original === reversed;
}


const readline = require("readline-sync");
let num1 = parseInt(readline.question("Enter first number: "));
let num2 = parseInt(readline.question("Enter second number: "));

console.log(`${num1} is ${isPalindrome(num1) ? "" : "not "}a Palindrome.`);
console.log(`${num2} is ${isPalindrome(num2) ? "" : "not "}a Palindrome.`);
