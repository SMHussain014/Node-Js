"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This method import the whole existing file
console.log(`How to import the whole file?`);
const app = require("./04_appStaticData.cjs");
console.log(app);
console.log("The user's Name is:", app.userName);
console.log(app.x);
console.log(app.y);
console.log(app.z(30, 20));
console.log(app.myHobbies);
console.log(`Although, this method works fine but it cannot import dynamic data.`);
