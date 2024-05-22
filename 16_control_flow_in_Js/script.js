// Control flow in JavaScript refers to the order in which individual statements, instructions, or function calls are executed or evaluated. Understanding control flow is essential for writing efficient and effective programs.

// Sequential Execution:
// By default, JavaScript code runs from the first statement to the last in a sequential manner.

let x = 10;
x += 5; // x is now 15
console.log(x); // Output: 15

// We will discuss more topic about control flow in dedicated notes.

// Control Flow Interruptions:
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
