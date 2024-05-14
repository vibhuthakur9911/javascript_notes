// # Functions in JavaScript are blocks of code that can be invoked (called) to perform a specific task or calculation.

// # They are essential for organizing code, promoting reusability, and implementing modular programming.

// Function declaration
function sayMyName() {
  console.log("Vaibhav Thakur");
}

//  sayMyName  : You can not call a function in this way because here it's represent the refrence instead of execute

sayMyName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// addTwoNumbers(); //Output : NaN

// addTwoNumbers(5, 3); //Output : 8

// addTwoNumbers(5, "3"); //Output : 53

// let result = addTwoNumbers(5, 4);

// console.log("Result:", result);

function addTwoNumbers(num1, num2) {
  // let result;
  // return num1 + num2;

  return num1 + num2;
}

let result = addTwoNumbers(5, 4);
console.log("Result:", result);

function loginUserMsg(userName) {
  return `Welcome, ${userName}`;
}

loginUserMsg("Vibhu"); // It will not show any output

console.log(loginUserMsg("Vaibhav Thakur"));

console.log(loginUserMsg()); // Welcome, undefined

// If user not pass any arguments

// console.log(loginUserMsg());

function anotherUser(userName) {
  if (userName === undefined) {
    console.log("Enter a valid Value");
    return;
  }

  return `Welcome, ${userName}`;
}

console.log(anotherUser()); // Enter a valid Value

// We can also assign default value
function anotherUser_Name(userName = "Vibhu Thakur") {
  return `Welcome, ${userName}`;
}

console.log(anotherUser_Name()); // Welcome, Vibhu Thakur
console.log(anotherUser_Name("Vaibhav Thakur")); // Welcome, Vaibhav Thakur
