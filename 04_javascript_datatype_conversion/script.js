let score = 33;
console.log(typeof score); // Number

score = "33";
console.log(typeof score); // String

let newNumValue = Number(score);
console.log(typeof newNumValue); //  Number

score = undefined;

let newNumValue_2 = Number(score);
console.log(typeof newNumValue_2); // Number
console.log(newNumValue_2); // NaN

// converting string into number

// '33' => 33  => type  is number

// '33abc' => NaN => type is number

// ture => 1, false => 0

// null => 0 => type  is number

// undefined => Nan => type  is number

// =====================Some basic operation==================

let x = 5;
let negValue = -x;

console.log(negValue);

// other basic maths operations

// console.log(2 + 3);
// console.log(2 - 3);
// console.log(2 * 3);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

// let strng_1 = "Hello";
// let strng_2 = "Vaibhav";

// let strng_3 = strng_1 + strng_2;
// console.log(strng_3);

// Concatenation of two strings using the plus operator (+)

// let num1 = 4;
// let num2 = 7;

// let sum = num1 + num2;

// console.log("The sum of " + num1 + " and " + num2 + " is " + sum);

// Some tricky conversion

// console.log("2" + 1); // "21"
// console.log("2" + 1 + "1"); // "211"
// console.log("2" + 1 + 1); // "211"
// console.log("2" + (1 + 1)); // "22"
// console.log(1 + 2 + "3"); //  "33"
// console.log(1 + (2 + "3")); // "123"

// Bitwise operators
// &: AND Operator
// | : OR Operator
// ^ : XOR Operator
// ~ : NOT Operator
// << : Left shift Operator
// >> : Right shift Operator

//Note: -  If You want to see the output use your console in  browser or any IDE that supports JavaScript like VS Code.
