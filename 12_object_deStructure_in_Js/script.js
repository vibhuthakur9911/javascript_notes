// Object destructuring is a convenient way to extract multiple properties from an object and assign them to variables in a single statement.

// It allows you to extract values from objects and bind them to variables using a syntax that mirrors the structure of the object.

const course = {
  courseName: "Javascript for beginners",
  price: 999,
  courseInstructor: "Vaibhav Thakur",
  chaptersIncludedInTher: 66,
};

// Object destructuring is performed using curly braces {} on the left-hand side of an assignment.

// The variable names inside the curly braces must match the property names of the object being destructured.

// let { prop1, prop2 } = object;

let { courseName } = course;
console.log(courseName); // Output: Javascript for beginners

let { price, courseInstructor } = course;
console.log(price); // Output: 999
console.log(courseInstructor); // Output: Vaibhav Thakur

let { chaptersIncludedInTher: chapter } = course;
console.log(chapter); // Output: 66

// Nested Object Destructuring:

let another_course = {
  name: "ReactJS Course",
  duration: "30 weeks",
  instructor: {
    name: "Vaibhav Thakur",
    age: 22,
    country: "India",
  },
};

let {
  name,
  duration,
  instructor: { name: instructorName, age, country },
} = another_course;

console.log(name); // output: ReactJS Course
console.log(duration); // output: 30 weeks
console.log(instructorName); // output: Vaibhav Thakur
console.log(age); // output: 22
console.log(country); // output: India
