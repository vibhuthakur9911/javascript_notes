// Stack => Primitive Datatypes
// Heap  => None-primitive

// 1.Stack Memory:
// # Stack memory is a region of memory used for storing function call contexts and local variables.
// # It operates in a Last In, First Out (LIFO) manner.
// # Stack memory is fast and has limited size.
let myName = "Vaibhav Thakur";
let anotherName = myName;
anotherName = "Vibhu";
console.log(myName); // Output => Vaibahv Thakur
console.log(anotherName); // Output => Vibhu

// 2.Heap Memory:
// # Heap memory is a region of memory used for dynamic memory allocation, such as objects and arrays.
// # It is less structured compared to the stack and is managed by the garbage collector.
// # Heap memory is slower but provides more flexibility for memory allocation.

let myObj = {
  name: "Vaibhav",
  userName: "mr.rajput12o8",
};

let myObj_2 = myObj;
myObj_2.userName = "vibhuuvibes"; // Modifying 'myObj_2' also affects 'myObj'

console.log(myObj.userName); // Output => vibhuuvibes
console.log(myObj_2.userName); // Output => vibhuuvibes
