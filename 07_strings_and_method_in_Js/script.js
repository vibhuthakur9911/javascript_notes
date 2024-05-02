// Strings in JavaScript are sequences of characters, enclosed in single ('') or double ("") quotes.

// They can contain letters, digits, symbols, and whitespace characters.

// Strings in JavaScript are immutable, meaning once they are created, their values cannot be changed.
// However, you can create a new string by modifying or concatenating existing strings.

// Creating strings
let greeting = "Hello, World!";
let name = "Vaibhav Thakur";

console.log(typeof name); // Output: string

// String length
console.log(greeting.length); // Output: 13

let newstrng = "The quick brown fox jumps over the little lazy dog !";
console.log(newstrng.length); //  Output:  52

// Accessing characters
console.log(name.charAt(0)); // Output: V
console.log(name.__proto__);
console.log(greeting[7]); // Output: W

// Concatenation
let fullName = name + " Vibhu";
console.log(fullName); // Output: Vaibhav Thakur Vibhu

// String methods
console.log(greeting.toUpperCase()); // Output: HELLO, WORLD!

console.log(name.toLowerCase()); // Output: vaibahv thakur

console.log(greeting.indexOf("World")); // Output: 7 =>  The index position of 'W' character in greeting is 7

console.log(name.slice(0, 4)); // Output: Vaib
console.log(name.slice(0, -4)); // Output: Vaibhav Th
// In slice method we can use negative value as you seen above example

console.log(name.substring(0, 4)); // Output: Vaib
// in substring method we can't use  negative value like that in slice method

console.log(greeting.split(", ")); // Output: ['Hello', 'World!']

// String as Object

// As Javascript automatically converts between string primitives and string objects, you can call any of the helper method of the string object on a string primitve

// length of string

// using backtics (``) we can access value using key directly
let message = `Hello, ${name}!`;
console.log(message); // Output: Hello, Vaibhav Thakur!

// trim method
let newName = "                 vaibhav";
console.log(newName);
console.log(newName.trim());

// You can read more about trim here
//( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim);

const url = "https://vaibhav-thakur%20netlify.app";

console.log(url.replace("%20", "-")); // output: https://vaibhav-thakur-netlify.app

console.log(url.includes("thakur" + "%20")); // true or false depends on the condition
