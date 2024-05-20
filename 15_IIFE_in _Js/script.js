// #An IIFE (pronounced "iffy") is a JavaScript function that runs as soon as it is defined.

// #The syntax involves defining a function and immediately invoking it.

//  ** The function is enclosed within parentheses () to make it an expression, and then it is immediately invoked with another set of parentheses ().

(function () {
  console.log("Hello");
})();

// Alternatively, you can also write it using arrow function syntax:
(() => {
  console.log("Hello");
})();

// Encapsulation: IIFEs are used to create a local scope and avoid polluting the global scope. This encapsulates variables and functions within the IIFE, preventing them from affecting the surrounding code.

// Initialization Code: IIFEs are commonly used for initialization code that needs to run once.

// Traditional function IIFE
(function () {
  var message = "Hello, Vaibhav!";
  console.log(message); // Output: "Hello, Vaibhav!"
})();

// Arrow function IIFE
(() => {
  let count = 0;
  console.log(count); // Output: 0
})();

// IIFEs can accept parameters by passing them during invocation.

(function (name) {
  console.log("Hello, " + name);
})("Vaibhav"); // Output: "Hello, Vaibhav"
