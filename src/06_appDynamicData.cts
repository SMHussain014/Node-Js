// This method export a particular data item from a file
// This is an example of dynamic data
const userData = require("prompt-sync")();
let firstName = userData("Please enter your First Name: ");
let middleName = userData("Please enter your Middle Name: ");
let lastName = userData("Please enter your Last Name: ");
let myAge = parseInt(userData("Please enter your current Age: "));
let isMarried = userData("Please enter your martial status: ");
export { firstName, middleName, lastName, myAge, isMarried };
// This is an example of static data
let x: string = "Ali";
let y: number = 10;
let z: boolean = true;
let fruitArray: string[] = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
let countingArray: number[] = [1, 2, 3, 4, 5];
function add (a: number, b: number): number {
    let c: number = a + b;
    return c;
};
let myObject = {
    name: "Syed Muhammad Hussain",
    age: 43,
    isMarried: true
};
export { x, y, z, fruitArray, countingArray, add, myObject };