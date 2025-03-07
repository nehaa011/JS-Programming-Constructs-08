//Write a program to compute Factors of a number N using prime factorization method.

const readline = require("readline-sync");

let N = parseInt(readline.question("Enter a number: "));

console.log("Prime factors of " , N , "are: ");


for (let i = 2; N % i === 0; N = N / i) {
    console.log(i);
}

for (let i = 3; i * i <= N; i += 2) {
    for (; N % i === 0; N = N / i) {
        console.log(i);
    }
}

if (N > 1) {
    console.log(N);
}
