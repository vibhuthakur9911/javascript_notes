
// # Objects in JavaScript are complex data structures used to store collections of related data and functionality.

// # They consist of key-value pairs, where keys are strings (or Symbols) and values can be of any data type, including numbers, strings, arrays, functions, and even other objects.

// # Objects can be declared using object literals {} or the new Object() constructor.

// Using object literals
let person = {
    name: 'Vaibhav',
    age: 22,
    // "Full name" : "Vaibhav Thakur",  // not a good way
    hobbies: ['reading', 'gaming'],
    greet: function() {
        return 'Hello, my name is ' + this.name;
    }
};

person.fullName = function(){
    return `${this.name}`;
}

// Using the Object constructor
let car = new Object();
car.make = 'Audi';
car.model = 'BNW';


// Accessing Properties:
// Properties of an object can be accessed using dot notation (object.property) or bracket notation (object['property']).

console.log(person.name); // Output: 'John'
console.log(person['age']); // Output: 22

// Adding and Modifying Properties:
// Properties can be added to or modified in an object at any time.

person.email = 'vaibhavthakur9911@gmail.com'; // Adding a new property
person.age = 24; // Modifying an existing property


console.log(person.greet()); // Output: 'Hello, my name is Vaibhav'
console.log(person.fullName()); // Output: 'Vaibhav'


// Nested Objects:
// Objects can contain other objects, creating nested data structures.

let address = {
    street: '123 Main St',
    city: 'New Delhi'
};

let user = {
    name: 'Vibhu',
    address: address
};


// Symbols:
// #Symbols are unique identifiers introduced in ES6.

// #They are created using the Symbol() function and are guaranteed to be unique.

// #Symbols are often used as keys for object properties to avoid naming collisions

let id = Symbol('id');
let user_new = {
    name: 'Vaibhav',
    // id : 123, // This is not a correct way 
    [id]: 123 // Using symbol as a property key

};

console.log(user_new[id]); // Output: 123