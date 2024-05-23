// while (condition) {
//     // code block to be executed
// }

let count = 0;

while (count < 5) {
  console.log(count); // Output: 0, 1, 2, 3, 4
  count++;
}

// Do-While Loop

// The do-while loop is similar to the while loop, but the condition is evaluated after the execution of the loop's body, making it a post-test loop. This ensures that the code block is executed at least once, regardless of the condition

// do {
//     // code block to be executed
// } while (condition);

let count_new = 0;

do {
  console.log(count_new); // Output: 0, 1, 2, 3, 4
  count_new++;
} while (count_new < 5);

// # Key Points:

// The code block is executed at least once before the condition is tested.
// The loop continues to execute as long as the condition is true.
// Suitable for situations where you need the loop body to execute at least once.

// # Differences Between While and Do-While Loops
// Condition Evaluation:
// while loop: The condition is checked before the loop body is executed.
// do-while loop: The condition is checked after the loop body is executed.

// # Execution Guarantee:
// while loop: The loop body may not execute at all if the condition is false initially.
// do-while loop: The loop body executes at least once, regardless of the initial condition.

// Do-While Loop: Used when the loop body must execute at least once, such as in input validation scenarios.

let number;
do {
  number = prompt("Enter a number between 1 and 10:");
} while (number < 1 || number > 10);
console.log("Valid number entered:", number);
