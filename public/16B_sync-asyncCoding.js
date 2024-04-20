"use strict";
// Drawback of Asynchronous Coding
console.log('Let see a drawback of async coding:');
let a = 10;
let b = 5;
setTimeout(() => {
    b = 20;
}, 2000);
let c = a + b;
console.log(c);
// How to set this drawback
console.log('How to fix this drawback:');
let x = 10;
let y = 5;
let waitingData = new Promise((res, rej) => {
    setTimeout(() => {
        res(20);
    }, 2000);
});
waitingData.then((data) => {
    if (typeof data === 'number') {
        y = data;
    }
    ;
    let z = x + y;
    console.log(z);
});
