// This method import a particular data item from a file
console.log(`How to import a particular data item from a file.`);
console.log(`This is an example of dynamic data:`)
import { firstName, middleName, lastName, myAge, isMarried } from "./06_appDynamicData.cjs";
console.log(`The user's Full Name is : ${firstName} ${middleName} ${lastName}.`);
console.log(`The user's current Age is: ${myAge}.`);
console.log(`The user's Martial Status is: ${isMarried}.`);
console.log(`This is an example of static data:`)
import { x, y, z, fruitArray, countingArray, add, myObject } from "./06_appDynamicData.cjs";
console.log(`The value of x is: ${x}.`);
console.log(`The value of y is: ${y}.`);
console.log(`The value of z is: ${z}.`);
console.log(`The value of fruitArray is:`, fruitArray);
console.log(`The value of countingArray is:`, countingArray);
let c = add(10, 20);
console.log(`The value of add function is: ${c}.`);
console.log(`The value of myObject is:`, myObject);
console.log(`This method prints dynamic as well as static data.`);
