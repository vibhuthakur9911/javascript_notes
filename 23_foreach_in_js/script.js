// Accessing array using 'forEach'

let courses = ["JavaScript", "React", "Python"];

// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

// ===============================
courses.forEach(function (courseName) {
  //   console.log(courseName);
});
// ===============================

// We can also use arrow function
courses.forEach((courseName) => {
  //   console.log(courseName);
});

// ===============================

// using Reference
function printCourse(courseName) {
  //   console.log(courseName);
}

courses.forEach(printCourse);
// ================================

courses.forEach(function (value, index, arr) {
  //   console.log(value, index, arr);
});

const courseObj = [
  {
    languageName: "Javascript",
    Topic: "High order array method",
  },
  {
    languageName: "React",
    Topic: "Hooks",
  },
  {
    languageName: "Python",
    Topic: "SOLID Principles",
  },
];

courseObj.forEach((name) => {
  //   console.log(name.Topic);
});

const animeCharacter = {
  naruto: "Itachi Uchiha",
  onePiece: "Monkey D. Luffy",
  dragonBall: "Goku",
  deathNote: "Kira",
};

// animeCharacter.forEach((name) => {
//   //   console.log(name);
// });

// In JavaScript, the forEach method is specifically designed for arrays and other array-like objects. It is not directly available for objects. However, you can use forEach to iterate over the properties of an object by first obtaining the keys, values, or entries of the object using Object.keys(), Object.values(), or Object.entries().

Object.keys(animeCharacter).forEach((key) => {
  console.log(`${key}: ${animeCharacter[key]}`);
});
