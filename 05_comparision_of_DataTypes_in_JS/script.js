// Strict Equality (===):
// # Checks for both value and type equality.
// # Returns true if both operands are of the same type and have the same value.
// # Does not perform type coercion.
console.log(10 === 10); // Output: true
console.log("10" === 10); // Output: false (different types)

// Strict Inequality (!==):
// #Checks for either value or type inequality.
// #Returns true if operands are of different types or have different values.
console.log(10 !== 5); // Output: true
console.log("10" !== 10); // Output: true (different types)

//  Loose Equality (==):
// # Checks for value equality after type coercion.
// # Returns true if operands are equal after coercion.
// # Performs type coercion if operands are of different types.
// # May lead to unexpected results due to implicit type conversion.
console.log(10 == "10"); // Output: true (string '10' coerced to number 10)
console.log("" == false); // Output: true (empty string coerced to false)

// Loose Inequality (!=):
// # Checks for value inequality after type coercion.
// # Returns true if operands are not equal after coercion.
// # Performs type coercion if operands are of different types.
console.log(10 != "5"); // Output: false (string '5' coerced to number 5)
console.log("" != false); // Output: false (empty string coerced to false)

console.log(10 > 5); // Output: true  # Greater Than
console.log(5 < 10); // Output: true # Less Than
console.log(10 >= 10); // Output: true # Greater Than or Equal To
console.log(5 <= 10); // Output: true #Less Than or Equal To

// Type Coercion
console.log(0 == "0"); // Output: true
console.log("" == false); // Output: true
console.log(null == undefined); // Output: true

//NaN Comparision
console.log(NaN == NaN); // Output: false
console.log(NaN === NaN); // Output: false

// String Comparison:
console.log("2" > "10"); // Output: true (Lexicographical comparison, not numerical)
console.log("25" > "100"); // Output: true

//Floating-point Precision
console.log(0.1 + 0.2 == 0.3); // Output: false

// Truthy and Falsy Values
console.log([] == false); // Output: true
console.log([] == ![]); // Output: true
console.log("false" == false); // Output: false (string 'false' is not coerced to boolean)

// Comparison operators are used to compare values in JavaScript.

// Strict equality (===) and strict inequality (!==) operators check for both value and type equality.

// Loose equality (==) and loose inequality (!=) operators perform type coercion before comparison.

// Greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=) operators compare numerical values.

// Understanding the behavior of each comparison operator helps in writing accurate and predictable JavaScript code.
