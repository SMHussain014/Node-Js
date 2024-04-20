// Core Module - Global 
console.log("-->", __dirname);
console.log("-->", __filename);
// Core Module - Non-global
// CRUD with file system
// How to create files in NodeJs:
let fs = require("fs");
fs.writeFileSync("creatingServer.txt", "This is my first Server.");
console.log("Alternative Method");
const fss = require("fs").writeFileSync;
fss("firstCoding.html", "Hello! World.");
// How to create a file in a specific folder
const path = require("path");
const dirPath = path.join(__dirname, 'CURD');
const filePath = `${dirPath}/index.txt`;
fs.writeFileSync(filePath, "This is a readyOnly file.");
// How to create multiple files in a specific folder
const myDirPath = path.join(__dirname, 'sampleFiles');
for (let i = 1; i <= 5; i++) {
    fs.writeFileSync(`${myDirPath}/index_0${i}.txt`, 'These are sample files.');
};
// How to read the directory
fs.readdir(dirPath, (err, files) => {
    console.log(files);
});
console.log('Alternative Method');
fs.readdir(dirPath, (err, files) => {
    files.forEach((items) => {
        console.log(items);
    })
});
// How to read a file
fs.readFile(filePath, 'utf8', (err, file) => {
    console.log(file);
});
// How to update a file
fs.appendFile(filePath, ' and file name is "index.txt".', (err) => {
    if (!err) {
        console.log("The file is updated.");
    };
});
// Note: Do not run again as its will further add text in the file.
// How to rename a file
fs.rename(filePath, `${dirPath}/index.txt`, (err) => {
    if (!err) {
        console.log("The file is successfully renamed.");
    };
});
// How to delete a file
fs.unlinkSync(`${dirPath}/index.txt`);