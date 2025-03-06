// Program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value.

let num1 = Math.floor(Math.random() *900)+100;
let num2 = Math.floor(Math.random() *900)+100;
let num3 = Math.floor(Math.random() *900)+100;
let num4 = Math.floor(Math.random() *900)+100;
let num5 = Math.floor(Math.random() *900)+100;

let min= Math.min(num1, num2, num3, num4, num5);
let max= Math.max(num1, num2, num3, num4, num5);

console.log("Minimun Value is: ", min);
console.log("Maximun Value is: ", max);

