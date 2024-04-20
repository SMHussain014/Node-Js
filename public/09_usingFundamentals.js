"use strict";
// if-else condition
let num = 20;
if (num === 20) {
    console.log("Matched");
}
else {
    console.log("UnMatched");
}
;
console.log("End of if-else Condition");
// for loop
const arr = [2, 3, 5, 3, 7, 8];
for (let i = 0; i < 4; i++) {
    console.log(arr[i]);
}
;
console.log("End of for loop");
/*
Use of filter functions:
This function can only be used on a Array in NodeJs to filter it.
*/
console.log("The 'filter function runs loop on the Array:");
arr.filter((items) => {
    console.log(items);
});
console.log("THe filter function gives specific value of the Array:");
let result = arr.filter((items) => {
    return (items >= 5);
});
console.log(result);
let result1 = arr.filter((items) => {
    return (items === 3);
});
console.log(result1);
