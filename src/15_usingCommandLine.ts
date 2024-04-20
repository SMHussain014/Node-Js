const fls = require("fs");
let input = process.argv;
console.log(input);
// fls.writeFileSync(input[2], input[3]);
// Alternative Method
if (input[2] == 'add') {
    fls.writeFileSync(input[3], input[4]);
}
else if (input[2] == 'remove') {
    fls.unlinkSync(input[3]);
}
else {
    console.log("Invalid Output");
};