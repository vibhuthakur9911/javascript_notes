"use strict"; //  necessary for es6 export or Treate all code as a newr version.

// Just a heads up: I've set up the environment for our JavaScript learning using Node.js on my local system. You might want to do the same to follow along smoothly!

// Numbers:
let length = 16;
let weight = 7.5;

// BigInt (length); this is used for  numbers that are too large to be stored in JavaScript's number type, such as 90
// let bigNum = BigInt("Number");

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

null; // => standard value// Null value, used when there is nothing /no value.
undefined; // Undefined value, used when the variable has been declared but not assigned any value yet.

// Object:
const person = { firstName: "Vaibhav", lastName: "Thakur" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2024-04-26");

// function
function greet(name) {
  console.log("Hello, " + name + "!");
}
// Out put
greet("Vaibav Thakur");

console.log(length);

console.log(weight);

console.log(color);

console.log(lastName);

console.log(x);

console.log(y);

console.table(person);

console.table(cars);

console.log(date);

// Extras
console.log(typeof null); // Outputs 'object' because JavaScript treats null as an empty object.
console.log(typeof undefined); // Outputs 'undefined', which indicates that it hasn’t been declared or assigned a value yet.
