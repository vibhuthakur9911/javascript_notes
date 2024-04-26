// Variables in JavaScript are containers for storing data values. They are declared using keywords like let, const, or var.

// Declaring variables
const PI = 3.14; // Using consxt for constant
// PI = 14.3;  //  Error: Assignment to a constant variable #it will throw an error because we neighter  redeclare const variable nor  change the value...

let name = "Vaibhav"; // Using let for mutable variables

// Reassigning values
name = "Thakur"; // Variable 'name' reassigned // I can be reassig

// let name =""; //Cannot redeclare block-scoped variable 'name' #it will throw an error.

var age = 23; // Using var (older approach)
var age = 24; // We can redeclare  it, also change the value of  the previous one;
/*
Prefer not to use var
because of issue in block scope functional scope 
*/

// Outputting variables
console.log("PI:", PI); // Output: PI: 3.14
console.log("Name:", name); // Output: Name: Jane
console.log("Age:", age); // Output: Age: 30

// Variables declared with let and var are mutable, meaning their values can be changed.

// Constants declared with const cannot be reassigned once initialized.

// Variables declared with var have function-level scope, which may lead to unintended behavior.

// Variables declared with let and const have block-level scope, which helps prevent unintended variable hoisting and leakage.

// JavaScript variable names are case-sensitive.

// Variable names can include letters, digits, underscores, and dollar signs, but they cannot start with a digit.

// Reserved keywords cannot be used as variable names.
