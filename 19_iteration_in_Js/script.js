// For Loop in JavaScript
// The for loop is a fundamental looping structure in JavaScript used to repeat a block of code a specific number of times. It is especially useful when the number of iterations is known beforehand.

// Syntax
// The for loop consists of three parts: initialization, condition, and increment/decrement, all contained within the parentheses.

// for (initialization; condition; increment / decrement) {
//   // code block to be executed
// }

// #Initialization: Executes once before the loop starts. It is typically used to initialize a counter variable.

// #Condition: Evaluated before each iteration of the loop. The loop continues to run as long as this condition is true.

// #Increment/Decrement: Executes after each iteration of the loop. It is usually used to update the counter variable.

for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2,3, 4
}

// break Statement: Exits a loop or switch statement prematurely.

for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // Output: 0, 1, 2, 3, 4
}

// continue Statement: Skips the current iteration of a loop and proceeds to the next iteration.

for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  console.log(i); // Output: 0, 1, 2, 3, 4, 6, 7, 8, 9
}

// Loop Nesting in JavaScript

for (let i = 1; i <= 3; i++) {
  // Outer loop
  for (let j = 1; j <= 3; j++) {
    // Inner loop
    console.log(`i = ${i}, j = ${j}`);
  }
}
