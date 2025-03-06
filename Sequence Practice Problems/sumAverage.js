//Write a program that reads 5 Random 2 Digit values ,then find their sum and the average

let num1= Math.floor(Math.random() *90) + 10;
let num2= Math.floor(Math.random() *90) + 10;
let num3= Math.floor(Math.random() *90) + 10;
let num4= Math.floor(Math.random() *90) + 10;
let num5= Math.floor(Math.random() *90) + 10;

let sum= num1 + num2 + num3 + num4 + num5;

let average = sum/5;

console.log("Sum is: " + sum);
console.log("Averge is: "+ average);


