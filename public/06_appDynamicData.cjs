"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myObject = exports.add = exports.countingArray = exports.fruitArray = exports.z = exports.y = exports.x = exports.isMarried = exports.myAge = exports.lastName = exports.middleName = exports.firstName = void 0;
// This method export a particular data item from a file
// This is an example of dynamic data
const userData = require("prompt-sync")();
let firstName = userData("Please enter your First Name: ");
exports.firstName = firstName;
let middleName = userData("Please enter your Middle Name: ");
exports.middleName = middleName;
let lastName = userData("Please enter your Last Name: ");
exports.lastName = lastName;
let myAge = parseInt(userData("Please enter your current Age: "));
exports.myAge = myAge;
let isMarried = userData("Please enter your martial status: ");
exports.isMarried = isMarried;
// This is an example of static data
let x = "Ali";
exports.x = x;
let y = 10;
exports.y = y;
let z = true;
exports.z = z;
let fruitArray = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
exports.fruitArray = fruitArray;
let countingArray = [1, 2, 3, 4, 5];
exports.countingArray = countingArray;
function add(a, b) {
    let c = a + b;
    return c;
}
exports.add = add;
;
let myObject = {
    name: "Syed Muhammad Hussain",
    age: 43,
    isMarried: true
};
exports.myObject = myObject;
