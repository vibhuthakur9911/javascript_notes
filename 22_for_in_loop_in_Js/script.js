const animeCharacter = {
  naruto: "Itachi Uchiha",
  onePiece: "Monkey D. Luffy",
  dragonBall: "Goku",
  deathNote: "Kira",
};

for (const charName in animeCharacter) {
  //   console.log(
  //     `Name of the anime is ${charName} and the Charcter Name is ${animeCharacter[charName]}`
  //   );
}

// accessing array using while (for...in loop)

let courses = ["JavaScript", "React", "Python", "Angular"];
for (const key in courses) {
  //   console.log(courses[key]);
}

// Important Notes
// The for...in loop should primarily be used with objects. For arrays, prefer using for, for...of, forEach, or other array iteration methods.

// The loop iterates over the keys in the order they were defined, but this is not guaranteed by the JavaScript specification.

// It is also important to check whether the property is a direct property of the object using hasOwnProperty to avoid iterating over properties inherited through the prototype chain.

// accesing map

let map = new Map();

map.set("IN", "India");
map.set("UK", "United Kindom");
map.set("USA", "United States of America");
map.set("FR", "France");

for (const [key, value] in map) {
  console.log(key, " :- ", value);
}
// output will not visible because 'Map' is not itereable.
