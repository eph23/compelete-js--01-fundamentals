"use strict";
//NOTE: Function Declaration
function calcAgeDeclaration(birthYear) {
    return 2037 - birthYear;
}

const ageFromDeclaration = calcAgeDeclaration(1988);
console.log("Age from function declaration", ageFromDeclaration);

//NOTE: Function Expression
const calcAgeExpression = function (birthYear) {
    return 2037 - birthYear;
};

const ageFromExpression = calcAgeExpression(1988);
console.log("Age from function expression", ageFromExpression);

//NOTE: Arrow Function
// Simple form
const calcAgeArrow = (birthYear) => 2037 - birthYear;

const ageFromArrow = calcAgeArrow(1988);
console.log("Age from function arrow function", ageFromArrow);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    //     return retirement;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1988, "Eph"));
console.log(yearsUntilRetirement(1980, "Bob"));
