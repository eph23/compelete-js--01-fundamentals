"use strict";

// Functions are fundamental building block of JavaScript

//NOTE: Function Declaration
function logger() {
    console.log("My name is Eph");
}

//NOTE: Calling/invoking/running a function
logger(); //My name is Eph

//NOTE: Function Declaration with parameters/arguments
// Parameters are like variables and specific to a function and will get defined when function is called.
// Parameters represents the input data of a function

function fruitProcessor(apples, oranges) {
    //     console.log(apples, oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

// console.log(fruitProcessor(5, 0));

//NOTE: Saving function's returned value inside a variable

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//NOTE: Not all functions need to return a value and not all function should receive parameters
// By default all functions return **undefined
