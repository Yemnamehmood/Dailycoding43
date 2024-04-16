"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//DAY 43
//TASK 1 (Using traditional function expression)
let traditionalfunction = function (a, b) {
    return a + b;
};
//converting to arrow function
let arrowfunction = (a, b) => a + b;
console.log(traditionalfunction(4, 10)); //Result 14 
console.log(arrowfunction(4, 10)); //Result 14
//Demonstrate the conversion of traditional function expression to an arrow function.
//TASK 2 (Using arrow function and calculates of all its parameters)
let multiplyparameters = (...numbers) => numbers.reduce((total, number) => total * number, 1);
console.log(multiplyparameters(4, 5, 6)); //Result 120
//This function uses rest parameter syntax to take any no of arguements, then multiply them together.
//TASK 3 (Using "this" in traditional vs arrow functions)
let traditionalVsarrow = {
    value: "TraditionalVsArrow Competition",
    traditionalfunction: function () {
        console.log("Traditional Function:", this.value); //this refer to traditionalVsArrow object
    },
    arrowFunction: function () {
        console.log("Arrow Function:", this.value); //this is not bound to traditionalVsArrow object
        //but to the scope ib which traditionalVsArrow was defined
    },
};
traditionalVsarrow.traditionalfunction();
traditionalVsarrow.arrowFunction();
//it simply shows this method using in two other functions
