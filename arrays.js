const num = 100;
const str = "100";
const bool = true || false;
const arr = [];

const friendsArray = ["martin", "scott", "craig", "maya"];

// friendsArray.forEach(function(name) {
//   console.log(name)
// })

// friendsArray.forEach((name) => {
//   console.log(name)
// })

// friendsArray.forEach(name => console.log(name))

for (let friendName of friendsArray) {
  console.log(friendName);
}

// for (let [index, name ] of friendsArray.entries()) {
//   if (index % 2 !== 0) {
//     console.log(`${index}: ${name}`);
// }

// Array.prototype.entries() will return:
const friendsArrayAfterEntries = [[0, "martin"], [1, "scott"], [2, "craig"], [3, "maya"] ];

// this is an example of array destructuring:
// const [value1, value2] = ["a", "b"];
// const value1 = ["a", "b"][0];
// const value1 = ["a", "b"][1];


