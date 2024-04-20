// Synchronous Coding
console.log('How sync functions:');
console.log('Start Execution');
console.log('Logic Execution');
console.log('Complete Execution');
// Asynchronous Coding
console.log('How async functions:');
console.log('Start Execution');
setTimeout(() => {
    console.log('Logic Execution');
}, 2000);
console.log('Complete Execution');