"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// How to create API in NodeJs:
const data = require("./14_staticData.cjs");
console.log(data);
// To make an API, firstly, we have to make a Server
const http = require("http");
http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'Application/json' });
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);
