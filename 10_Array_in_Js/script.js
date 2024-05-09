// array

// Arrays in JavaScript are used to store multiple values in a single variable.

// They can hold any data type, including numbers, strings, objects, and even other arrays.

// Arrays can be declared using array literals ([]) or the Array() constructor.

// Using array literals
let numbers = [0, 1, 2, 3, 4, 5];
console.log(numbers);

let fruits = ['apple', 'banana', 'grapes'];
console.log(fruits);

// Using the Array constructor
let emptyArray = new Array();

let anotherArray = new Array (1, 2, 3, 'Vaibhav', true);
console.log(anotherArray);

// Accessing Elements:
// Individual elements in an array are accessed using zero-based indexing.

console.log(numbers[2]); // Output: 3

console.log(fruits[1]); // Output: 'banana'

// Properties and Methods:
// Arrays in JavaScript have various properties and methods for manipulation, such as 
// # length
// # push() 
// # pop()
// # unshift()
// # shift()
// # concat()
// # join()
// # slice()
// # splice()
// # indexOf()
// # forEach()
//  and  etc.
// Length property: The length property returns the number of elements in an array.

console.log('Length of "numbers" is : ', numbers.length) // Output: 6

// Push method: Adds one or more elements to the end of an array and returns the new length of the array.

numbers.push(6,7,'Hello');
console.log(numbers); // Output: [0, 1, 2,  3, 4, 5,  6, 7, 'Hello']

// Pop method: Removes the last element from an array and returns that element. This method changes the length of the array.
numbers.pop();
console.log(numbers);// Output: [0, 1, 2,  3, 4, 5,  6, 7]

// Unshift method: add the  element in the start of the array and return the new length of array
fruits.unshift("Orange");
console.log(fruits); // Output: ['Orange','apple','banana','grapes']

// Shift method: remove the first element of the array
let removedElement = fruits.shift();
console.log(`Removed element is ${removedElement}`); // Output: Removed element is Orange
console.log(fruits); // Output: ['apple', 'banana', 'grapes']

// Concat method: combines two arrays into a single array. It does not change existing arrays but instead returns
let arr1=[1,2];
let arr2=['a','b'];
console.log(arr1.concat(arr2)); // Output: [1,  2, 'a', 'b']
// using spread method
console.log([...arr1, ...arr2]); // Output: [1, 2, 'a', 'b']

// Join method: it joins all elements of an array into a string separated by a specified separator
console.log(numbers.join());                // Output: 0,1,2,3,4,5,6,7
console.log(numbers.join('-'));            // Output: 0-1-2-3-4-5-6-7
console.log(['a', 'b', 'c'].join('-'));    // Output: a-b-c


// Includes method
console.log(numbers.includes(3)); // Will return the true
console.log(fruits.includes('mangoes')); // Will return the false

// IndexOf 
// provide the index of the element in the Array
console.log(numbers.indexOf(5)); // output: 5
console.log(numbers.indexOf(10)); // output: -1 // if the element doesn't exist it will return '-1'




// Slice method: extract a section of an array and return a new array
console.log(numbers);
console.log(numbers.slice(2));             // Output: [2, 3, 4, 5, 6, 7]
console.log(numbers.slice(2, 5));          // Output: [2, 3, 4]

//Splice method: extract the value of the array and modified the old array
const newNumb = [1,2,3,4,5,6,7,8]

let spliceArray = newNumb.splice(2,5); 
console.log(spliceArray); // output  [ 3, 4, 5, 6, 7 ]
console.log(newNumb)     // output  [ 1,2, 8 ]

// Some  Tricky Questions

let marvel_heroes = ['Ironman', 'Thor', 'Hulk'];
let dc_heroes = ['Superman', 'Flash', 'batMan'];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);// ouptut [ 'Ironman', 'Thor', 'Hulk', [ 'Superman', 'Flash', 'batMan' ] ] 

// istead of using push we can use concat or spread operator

new_heroes = marvel_heroes.concat(dc_heroes); // Concat method
// new_heroes = [...marvel_heroes, ...dc_heroes]; // Spread method
console.log(new_heroes);

// array nesting

let nested_array =  [1, 2, 3, [ 5, 6, 7 ], 8, [ 9, 5, [ 3, 2 ]]]

let simplified_array = nested_array.flat(Infinity);
console.log(simplified_array);