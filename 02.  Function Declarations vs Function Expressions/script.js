"use strict";
//NOTE: Function Declaration
function calcAgeDeclaration(birthYear) {
    //     const age = 2037 - birthYear;
    //     return age;

    return 2037 - birthYear;
}

//NOTE: Parameters vs Expressions
// Parameters are placeholder values when writing/defining a function. Where Arguments are the real value that we want to pass in the function

const ageFromDeclaration = calcAgeDeclaration(1988);
console.log("Age from function declaration", ageFromDeclaration);

//NOTE: Function Expression
// Expression produces value
const calcAgeExpression = function (birthYear) {
    return 2037 - birthYear;
};

const ageFromExpression = calcAgeExpression(1988);
console.log("Age from function expression", ageFromExpression);

//NOTE: Functions are values in JavaScript and we can store the functions value with a variable