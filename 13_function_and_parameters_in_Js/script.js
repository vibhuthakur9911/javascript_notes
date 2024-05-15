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

// Arguments:

// #Arguments are the actual values passed to a function when it is called.
// #They correspond to the parameters defined in the function declaration.
// #Arguments are provided within the parentheses () when calling the function.

function greet(name) {
  return name;
}

let arg = greet("Vaibhav"); // 'Vaibhav' is an argument

// Rest Parameters

// #Rest parameters allow functions to accept an indefinite number of arguments as an array.

// #They are specified using the rest parameter syntax `....`

function nums(num) {
  return num;
}

console.log(nums(100)); // Output: 100
console.log(nums(100, 200, 300)); //Output:  100  , Eventully It will return the first value

// To tackle the above condition we can use rest parameters.

function calculatNum(...numbers) {
  return numbers;
}

console.log(calculatNum(100, 200, 300)); // Output : [ 100, 200, 300 ]

const new_course = {
  title: "Js",
  instructorName: "Vaibhav",
};

function handleObject(anyobject) {
  return `This is ${anyobject.title} Course and instrcutor will be ${anyobject.instructorName}`;
}

console.log(handleObject(new_course));

console.log(
  handleObject({
    title: "React",
    instructorName: "Vibhu",
  })
);
