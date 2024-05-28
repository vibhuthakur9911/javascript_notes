// Filter method in js

// * Purpose: Creates a new array with all elements that pass a test implemented by a provided function.

// * Non-mutating: Does not modify the original array.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Explicit or multi line
// let filterdArr = num.filter((mynumb) => {
//   return mynumb > 5;
// });

// console.log(filterdArr);

// Implicit or Single line
let filterdArr = num.filter((myNumb) => myNumb > 5);
console.log(filterdArr);

let anotherNum = [];

num.forEach((forNumb) => {
  if (forNumb > 5) {
    anotherNum.push(forNumb);
  }
});

console.log(anotherNum);

// Returns a new array with elements that pass the test.
// Commonly used for selective extraction based on a condition.

const books = [
  { title: "Book-one", genre: "Fiction", publshed: 1991 },
  { title: "Book-two", genre: "Non-fiction", publshed: 1995 },
  { title: "Book-three", genre: "history", publshed: 1981 },
  { title: "Book-four", genre: "sci-fi", publshed: 2000 },
  { title: "Book-five", genre: "Fiction", publshed: 2002 },
  { title: "Book-six", genre: "Non-Fiction", publshed: 2022 },
  { title: "Book-seven", genre: "history", publshed: 2008 },
  { title: "Book-eight", genre: "Fiction", publshed: 1996 },
];

let result = books.filter((book_genre) => book_genre.genre === "history");
//   .filter((published_year) => published_year.publshed > 2000); // method chainging, we can use more than two method in array
console.log(result);

let userBooks = books.filter((book_specs) => {
  return book_specs.genre === "Fiction" && book_specs.publshed < 2000;
});

console.log(userBooks);

// map() method in Javascript

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const mapNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Explicit or multi line
let new_mapNumb = mapNumb.map((number) => {
  return number * 2;
});

console.log(new_mapNumb);
// Implicit or single line

new_mapNumb = mapNumb.map((number) => number ** 2);
console.log(new_mapNumb);

// ## Key Points
// Non-mutating: map() does not change the original array; it returns a new array.
// Element Count: The new array will have the same number of elements as the original array.
// Transformation: Often used to transform data or apply a function to each element.

// ## Limitations and Boundaries
// Side Effects: Although the callback can have side effects, it is generally used for pure transformations (no side effects).
// Sparse Arrays: If the array is sparse (has gaps), map() will skip the gaps in the returned array.
// Performance: Creates a new array; for large datasets, consider the performance implications.
// Non-Nested Arrays: map() is not suitable for flattening nested arrays (use flatMap() or other methods for that).

// ! Note
// Chaining: Can be chained with other array methods like filter(), reduce(), etc.

const numbers = [1, 2, 3, 4, 5];
const evenDoubledNumbers = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2);
console.log(evenDoubledNumbers);

// Immutability: Encourages a functional programming style by promoting immutability.
// Compatibility: Widely supported in all modern browsers and environments.
