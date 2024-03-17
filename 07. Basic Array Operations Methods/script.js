"use strict";

const friends = ["Michael", "Steven", "John"];
console.log(friends);

//NOTE: Push method
friends.push("Jay");
console.log(friends);

// NOTE: Unshift method
friends.unshift("Bob");
console.log(friends);

//NOTE: Pop method
const popped = friends.pop();
console.log(popped);
console.log(friends);

// NOTE: Shift method
const shifted = friends.shift();
console.log(shifted);
console.log(friends);

//NOTE: includes method
console.log(friends.includes("Bob"));
console.log(friends.includes("Steven"));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}
