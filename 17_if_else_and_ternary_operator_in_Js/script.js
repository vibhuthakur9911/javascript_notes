// Conditional statements are used to perform different actions based on different conditions. In JavaScript, the primary conditional statements are if, else if, and else.

if (true) {
  // code to be executed if the condition is true
}

let age = 20;
if (age >= 18) {
  console.log("You are an adult."); // Output: You are an adult.
}

// else Statement
// The else statement is used to execute a block of code if the condition in the if statement is false.

if (true) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condition is false
}

// else Statement
// The else statement is used to execute a block of code if the condition in the if statement is false.

let balance = 10000;
if (balance >= 100000) {
  console.log("less Than 10000");
} else {
  console.log("More Than 10000"); // less Than 15000
}

// else if Statement
// The else if statement allows you to specify a new condition to test if the first condition is false.

if (false) {
  // code to be executed if condition1 is true
} else if (true) {
  // code to be executed if condition2 is true
} else {
  // code to be executed if neither condition1 nor condition2 is true
}

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // Output: Grade: B
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// Nested if Statements
// You can nest if statements within another if or else statement.

let num = 10;
if (num > 0) {
  if (num % 2 == 0) {
    console.log("The number is positive and even."); // Output: The number is positive and even.
  } else {
    console.log("The number is positive and odd.");
  }
} else {
  console.log("The number is not positive.");
}

// Conditional (Ternary) Operator
// The conditional operator is a shorthand for an if-else statement and can be used to assign a value based on a condition.

// ! condition ? expr1 : expr2;

let age_new = 20;
let status = age_new >= 18 ? "adult" : "minor";
console.log(status); // Output: adult
