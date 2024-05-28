// for...of Loop in JavaScript

// The for...of loop iterates over iterable objects (including arrays, strings, maps, sets, etc.)
// and executes a block of code for each distinct element.

// Syntax:
// for (variable of iterable) {
//   // code block to be executed
// }

// Example with Array:
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// Output:
// red
// green
// blue

// Example with String:
const greeting = "Hello";
for (const greet of greeting) {
  console.log(`Each character of ${greet}`);
}

// Output:
// H
// e
// l
// l
// o

// Map
// Map objects are collections of key-value pairs. A key in the Map may only occur once;
// if multiple values are given that share the same key, the last value passed is the one that is retained.

let map = new Map();

map.set("IN", "India");
map.set("UK", "United Kindom");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India"); //the last value passed is the one that is retained.

// console.log(map);

for (const [key, value] of map) {
  console.log(key, " :- ", value);
}

// Accessing Object

const animeCharacter = {
  naruto: "Itachi Uchiha",
  onePiece: "Monkey D. Luffy",
  dragonBall: "Goku",
  deathNote: "Kira",
};

// for (const key of animeCharacter) {
//   console.log(key, " :- ", animeCharacter[key]);
// }

// ! It will throw an error
