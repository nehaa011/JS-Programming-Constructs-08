//Write a program that takes a command-line argument n and prints the nth harmonic number.


let n= parseInt(process.argv[2]);

let result =  "Harmonic Number H(" + n + ") = ";
for(let i=1; i<=n; i++){
    result += "1/"+ i ;
    if(i<n){
        result += " + ";
    }
}
console.log(result);