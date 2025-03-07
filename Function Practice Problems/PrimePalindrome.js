const readline = require("readline-sync");


function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}


let num = parseInt(readline.question("Enter a number: "));

if (isPrime(num)) {
    console.log(`${num} is a Prime Number.`);
    let palindromeNum = getPalindrome(num);
    console.log(`Palindrome of ${num} is ${palindromeNum}.`);
    
    if (isPrime(palindromeNum)) {
        console.log(`The palindrome ${palindromeNum} is also a Prime Number.`);
    } else {
        console.log(`The palindrome ${palindromeNum} is NOT a Prime Number.`);
    }
} else {
    console.log(`${num} is NOT a Prime Number.`);
}
