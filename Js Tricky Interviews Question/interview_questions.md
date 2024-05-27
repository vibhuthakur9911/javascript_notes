<h2>** 50 tricky JavaScript interview questions ** along with brief explanations to help you prepare for interviews:</h2>

Q: What is the difference between == and === in JavaScript?

Ans: == checks for equality with type coercion, while === checks for equality without type coercion (strict equality).

Q: What will `[2] == [2]` return and why?
Ans: This expression will return false. This is because, in Javascript, arrays are objects and objects are compared by reference, not by value. Each array literal creates a new reference, so they are not equal, even if their contents are the same.

Q: What is the purpose of the `this` keyword in JavaScript?

Ans: `this` refers to the object that is currently executing the code. Its value can change depending on the context of execution.

Q: What are the differences between var, let, and const?

Ans: var is function-scoped, let and const are block-scoped. const is also read-only, meaning its value cannot be reassigned after initialization.
-------------------------
``` js
var num =  20;
var num = 50;
num = 70;
// Var in function scoped.

let name = "Vaibhav";
name = "Vibhu"
// let has reassigned the value but can't redeclare.
let name = "Nitin"

// It will throw an error.

const PI = 3.14;
// its value cannot be reassigned.
```
Q: What is event delegation?

Ans: Event delegation is a technique of using a single event listener to manage all events of a particular type on multiple elements within a parent.

Q: How does JavaScript’s prototype chain work?

Ans: Every JavaScript object has a prototype property that points to another object. This creates a chain from which properties and methods can be inherited.

Q: What is the difference between call, apply, and bind?

Ans: call and apply invoke a function with a specified this context; call takes arguments as a list, apply takes them as an array. bind returns a new function with a bound this context and specified arguments.

Q: What does the `.bind()` method do?
Ans: The `.bind()` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. This is tricky because it involves understanding how the this keyword works and how it can be explicitly set.

---------------------------
``` js 
const obj = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = obj.getX;
console.log(unboundGetX());  // Output: undefined

const boundGetX = unboundGetX.bind(obj);
console.log(boundGetX());  // Output: 42
```
---------------------------

Q: What is a promise in JavaScript?

Ans: A promise is an object representing the eventual completion or failure of an asynchronous operation.

Q: What are async/await?

Ans: async/await are syntactic sugar over promises, providing a more readable way to write asynchronous code.

Q: Explain the concept of hoisting in JavaScript.

Ans: Hoisting is JavaScript's behavior of moving declarations (variables and functions) to the top of their containing scope during compilation.

Q: What is the purpose of use strict?

Ans: use strict is a directive to enable strict mode, which catches common coding mistakes and unsafe actions, such as defining global variables.

Q: How do you deep clone an object in JavaScript?

Ans: You can deep clone an object using JSON.parse(JSON.stringify(obj)) or with libraries like Lodash’s _.cloneDeep.

Q: What is the event loop in JavaScript?

Ans: The event loop is the mechanism that allows JavaScript to perform non-blocking operations by managing an event queue and an execution stack.

Q: What is the difference between null and undefined?

Ans: undefined means a variable has been declared but has not yet been assigned a value. null is an assignment value that represents no value.

Q: What is the difference between a function declaration and a function expression?

Ans: Function declarations are hoisted and can be called before they are defined. Function expressions are not hoisted and cannot be called before they are defined.

Q: What are arrow functions?

Ans: Arrow functions provide a shorter syntax for writing functions and do not have their own this context, arguments object, or prototype.

Q: What is currying in JavaScript?

Ans: Currying is a technique where a function takes multiple arguments one at a time, each returning a new function until all arguments are provided.

Q: What is the difference between synchronous and asynchronous code in JavaScript?

Ans: Synchronous code is executed in a sequential manner, blocking subsequent operations until the current one completes. Asynchronous code is executed without blocking, allowing other operations to proceed.

Q: How can you avoid callback hell?

Ans: By using promises, async/await, or libraries like Async.js to manage asynchronous code.

Q: What is memoization?

Ans: Memoization is an optimization technique where the result of a function call is cached and returned when the same inputs occur again.

Q: What are higher-order functions?

Ans: Functions that take other functions as arguments or return them as results.

Q: Explain the concept of destructuring in JavaScript.

Ans: Destructuring is a syntax that allows extracting values from arrays or properties from objects into distinct variables.

Q: What is the spread operator and how is it different from the rest operator?

Ans: The spread operator (...) expands elements of an array or object properties. The rest operator (...) collects multiple elements into an array.

Q: What is the purpose of Object.create()?

Ans: Object.create() creates a new object with the specified prototype object and properties.

Q: What are modules in JavaScript?

Ans: Modules are reusable pieces of code that can be imported and exported to and from other parts of a program.

Q: What is a generator function?

Ans: A generator function is a function that can be paused and resumed, producing a sequence of values using the yield keyword.

Q: Explain the concept of tail call optimization.

Ans: Tail call optimization is a feature where the last function call in a function allows for optimization by reusing the current stack frame.

Q: What is the difference between map, filter, and reduce?

Ans: map creates a new array with the results of calling a function on every element. filter creates a new array with all elements that pass the test. reduce applies a function against an accumulator to reduce the array to a single value.

Q: What is a WeakMap and how is it different from a Map?

Ans: A WeakMap is a collection of key/value pairs where keys are objects and values can be arbitrary values. It does not prevent garbage collection of keys.

Q: How does setTimeout work?

Ans: setTimeout sets a timer that executes a function or code snippet after a specified delay.

Q: What is debouncing in JavaScript?

Ans: Debouncing is a technique to limit the rate at which a function can fire, ensuring it only runs after a certain period of inactivity.

Q: What is throttling in JavaScript?

Ans: Throttling is a technique to limit the number of times a function can be called over time, ensuring it only runs at most once in a specified interval.

Q: What are IIFEs (Immediately Invoked Function Expressions)?

Ans: IIFEs are functions that are defined and immediately executed to create a new scope.

Q: What is the difference between classical inheritance and prototypal inheritance?

Ans: Classical inheritance is based on classes, whereas prototypal inheritance is based on prototypes where objects inherit directly from other objects.

Q: Explain the concept of immutability in JavaScript.

Ans: Immutability means the state of an object cannot be modified after it is created. Changes create new objects instead of modifying existing ones.

Q: What is the Temporal Dead Zone (TDZ)?

Ans: The TDZ is a behavior where variables declared with let and const cannot be accessed before their declaration within a block.

Q: What is a polyfill?

Ans: A polyfill is a piece of code that provides modern functionality on older browsers that do not natively support it.

Q: How can you handle errors in JavaScript?

Ans: Using try, catch, finally blocks or handling promise rejections with .catch().

Q: What is event bubbling?

Ans: Event bubbling is the process by which an event starts from the target element and bubbles up to its ancestors in the DOM tree.

Q: What is event capturing?

Ans: Event capturing is the process by which an event is first captured by the outermost element and propagated to the target element.

Q: What is the difference between Object.freeze() and Object.seal()?

Ans: Object.freeze() makes an object immutable. Object.seal() prevents adding or removing properties but allows modification of existing properties.

Q: What is a proxy in JavaScript?

Ans: A proxy is an object that allows you to intercept and customize operations performed on another object.

Q: What is the difference between synchronous and asynchronous exceptions?

Ans: Synchronous exceptions are thrown during code execution. Asynchronous exceptions occur due to events like timers or promises.

Q: Explain the purpose of Symbol in JavaScript?

Ans: Symbols are unique and immutable primitive values used as identifiers for object properties, avoiding name clashes.

Q: What is the purpose of the Reflect API?

Ans: The Reflect API provides methods for intercepting JavaScript operations like property lookup, assignment, and function invocation.

Q: What is the purpose of Promise.all?

Ans: Promise.all takes an array of promises and returns a single promise that resolves when all the promises in the array have resolved.

Q: What is the difference between Promise.all and Promise.race?

Ans: Promise.all waits for all promises to resolve or for any to reject. Promise.race resolves or rejects as soon as one of the promises does.

Q: What are tagged template literals?

Ans: Tagged template literals allow you to call a function with a template literal, enabling custom parsing and processing of the template string.

Q: What is the difference between Array.prototype.forEach and Array.prototype.map?

Ans: forEach executes a function on each array element but does not return a new array. map creates a new array with the results of the function applied to each element.

Q: What is the difference between innerHTML and textContent?

Ans: innerHTML sets or returns the HTML content of an element, allowing HTML parsing. textContent sets or returns the text content, ignoring HTML tags.


```js
//  Guess the output.
const num = 10; 
function myfunc() { 
   console.log(num);  
   const num = 20; 
} 

myfunc();
// Ans: Reference Error
```
--------------------------------
``` js
// Guess the output of the following code.
const myObj = { 
  name: "John",
   age: 30
}; 
 const {name, age } = obj; 
console.log(name + ", " + age);

// Ans : Vaibhav 22
```

------------------------------------

```js

console.log(0.1 + 0.2 === 0.3);

```

Q: Can you explain closures with an example?
Ans: A closure is a function that has access to its own scope, the scope of the outer function and the global scope. This often confuses people who are new to JavaScript because it behaves differently than other programming languages in this respect.

``` js 
function outer() {
  let outerVar = "I am from outer function!";
  
  function inner() {
    let innerVar = "I am from inner function!";
    console.log(outerVar);  // I can access outerVar!
    console.log(innerVar);  // I can access innerVar!
  }
  
  return inner;
}

const myClosure = outer();
myClosure();  // Outputs: "I am from outer function!" and "I am from inner function!"

```