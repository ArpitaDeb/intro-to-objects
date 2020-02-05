const person = {
  firstName: "Martin",
  lastName: "Laws",
  heightInCm: 188
};

// for (let key in person) {
//   console.log(key, person[key])
// }

personKeys = Object.keys(person);

for (key of personKeys) {
  console.log(`${key}: ${person[key]}`)
}

// personValues = Object.values(person);

// console.log( Object.entries(person));
