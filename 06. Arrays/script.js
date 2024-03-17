"use strict";

//NOTE: Array literal
const friends = ["Michael", "Steven", "John"];
console.log(friends);

//NOTE: Declaring an array with the "new" keyword
const arrayOfYears = new Array(1991, 1984, 2008, 2020);
console.log(arrayOfYears);

//NOTE: Accessing array values
console.log(friends[0]);
console.log(friends[1]);

//NOTE: Array property
console.log(friends.length);

//NOTE: Accessing array value using array property
console.log(friends[friends.length - 1]);
console.log(friends[friends.length - 2]);

//NOTE: Mutating array value
friends[2] = "Jay";
console.log(friends);

//NOTE Array can hold different types of values
const lastName = "S";
const eph = ["Ephraim", lastName, 2037 - 1988, "Web-Dev", friends];
console.log(eph);
console.log(eph.length);

//NOTE: Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[2]),
    calcAge(years[3]),
    calcAge(years[4]),
];

console.log(ages);
