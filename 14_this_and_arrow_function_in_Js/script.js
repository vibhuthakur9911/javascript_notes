const user = {
  name: "Vaibhav",
  age: 22,
  introMsg: function () {
    return `Name of user is ${this.name} and his age is ${this.age}`;
    // console.log(this);
  },
};
console.log(user.introMsg());

user.name = "Vibhu";

console.log(user.introMsg());
// console.log(this); // Output: Window (in browser) or global object (in Node.js)

console.log(greet("Vaibhav"));

function greet(name) {
  return `Hello, ${name}`;
  //   console.log(this);
}

// console.log(another_greet("Vaibhav")); it will throw  an error  "Uncaught ReferenceError: Cannot access 'another_greet' before initialization" beacuse when we store a function in a variable we can't execute it before the the function

const another_greet = function (name) {
  return `Hello, ${name}`;
};

console.log(another_greet("Vaibhav")); // this is correct way to call a function which is stored in variable

// Arrow function
// ions are a concise way to write function expressions in JavaScript.
// They use a shorter syntax compared to traditional function expressions

// Implicit Return:

// Arrow functions with a single expression can omit the curly braces {} and the return keyword.
// The result of the expression is automatically returned.

const addTwoNum = (num1, num2) => num1 + num2; // Implicit return
console.log(addTwoNum(4, 3));

const addTwoNum_2 = (num1, num2) => {
  return num1 + num2;
};
