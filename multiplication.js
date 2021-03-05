/*Write a program that uses a multiply function to multiply two numbers and returns the result. 
Ask the user to enter the two numbers, then output the numbers and result as a simple equation.
*/

function multiply(prompt){
    let number = require('readline-sync');
         return number.question(prompt);
    
}
let number1 = multiply(`Enter the first number:`);
let number2 = multiply(`Enter the second number:`);

console.log(`${number1} * ${number2} = ${number1 * number2}`);



/*
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
*/

/* The question asked for two functions a multiply function and a function to ask the user for their numbers.
I missed the creating a multiple function in part 1.
*/