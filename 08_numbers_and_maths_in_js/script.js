// Numbers in JavaScript:
// In JavaScript, numbers are represented using the Number data type.
// Numbers can be integers (whole numbers) or floating-point numbers (decimal numbers).
// JavaScript does not differentiate between different types of numbers, such as integers and floats.

// Examples of declaring numbers in JavaScript

// Integer numbers
let integerNumber = 10;
let negativeNumber = -5;

// Floating-point numbers
let floatNumber = 3.14;
let negativeFloatNumber = -2.5;

// Scientific notation
let scientificNumber = 1.5e6; // 1.5 * 10^6 = 1500000
let negativeScientificNumber = -2.5e-3; // -2.5 * 10^-3 = -0.0025

// Hexadecimal and octal numbers (using Number literals)
let hexadecimalNumber = 0xff; // 255 in decimal
let octalNumber = 0o10; // 8 in decimal

console.log(integerNumber, negativeNumber);
console.log(floatNumber, negativeFloatNumber);
console.log(scientificNumber, negativeScientificNumber);
console.log(hexadecimalNumber, octalNumber);

// Using Number constructor
let balance = new Number(1000);
console.log(balance);

console.log(balance.toString().length); //  to convert in string and return the length.
console.log(balance.toFixed(1)); // it returns a string with a fixed number of digits after the decimal point. If omitted or NaN, it is treated as 0.
// out put: 1000.0

let anotherExample = 1228.2454186;
console.log(anotherExample.toFixed(2)); // returns "1228.24"

const hundred = 1000000;
console.log(hundred.toLocaleString("en")); // returns " 1,000,000" it will return in international numer system

console.log(hundred.toLocaleString("en-IN" /* or other country code */)); //return "10,00,000" this will show how number is displayed according to that country'

// =================Math==================
console.log(Math);
let absoluteValue = Math.abs(-10); // Absolute value return the positive value
console.log(absoluteValue);

let roundedNumber = Math.round(5.7); // output: 6 Round to nearest integer
console.log(roundedNumber);

let floorNumber = Math.floor(5.7); // output: 5 Round down to nearest integer
console.log(floorNumber);

let ceilingNumber = Math.ceil(5.3); // output: 6 Round up to nearest integer
console.log(ceilingNumber);

let minimumValue = Math.min(10, 5, 20); // output: 5 Minimum value
console.log(minimumValue);

let maximumValue = Math.max(10, 5, 20); // output: 20 Maximum value
console.log(maximumValue);

let squareRoot = Math.sqrt(25); // output: 5 Square root
console.log(squareRoot);

console.log(Math.random()); // it will return value from 0 - 1 random value.

console.log((Math.random() * 10) + 1);  // It will return a number between 1-11 because we multiply by 10 and add one.
console.log(Math.floor(Math.random() * 10) + 1); // It will return a number with Round down to nearest integer    

console.log(Math.PI); // 3.141592653589793
console.log(Math.PI.toFixed(2)); // 3.14;

const min = 10;
const max = 30

console.log(Math.floor(Math.random() * (max - min + 1)) + min);