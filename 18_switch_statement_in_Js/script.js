// The switch statement is used to execute one block of code among many based on the evaluation of an expression. It provides an efficient way to dispatch execution to different parts of code based on the value of a variable or expression.

// switch (expression) {
//   case value1:
// code block to execute if expression === value1
//     break;
//   case value2:
// code block to execute if expression === value2
//     break;
// add more cases as needed
//   default:
// code block to execute if expression doesn't match any case
// }

let furits = "Mango";

switch (furits) {
  case "Banana":
    console.log("banana");
    break;
  case "Apple":
    console.log("Apple");
    break;
  case "Mango":
    console.log("Mango");
    break;
  default:
    console.log("There is not Fruit exist that you want");
}

// e.g. 2

let day = new Date().getDay(); // To get the current day

// console.log(day);
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tursday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Not find a valid value");
}

// ! Example with Fall-through
// If the break statement is omitted, the program continues executing the next case's code block. This is known as fall-through.

let score = "B";

switch (score) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
  case "C":
    console.log("Well done"); // Output: Well done
    break;
  case "D":
    console.log("You passed");
    break;
  case "F":
    console.log("Better try again");
    break;
  default:
    console.log("Unknown grade");
}

// ! Example Using Expressions
// The switch statement can also use expressions as case values.

let num = 10;

switch (true) {
  case num < 0:
    console.log("Negative number");
    break;
  case num === 0:
    console.log("Zero");
    break;
  case num > 0:
    console.log("Positive number"); // Output: Positive number
    break;
  default:
    console.log("Unknown number");
}
