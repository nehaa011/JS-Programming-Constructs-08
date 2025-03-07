// Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.

let n = parseInt(process.argv[2]);

console.log("Powers of 2 up to 2^" , n ," :");
for(let i=1; i<=n; i++){
    console.log("2^",i , "= " , Math.pow(2, i));
}