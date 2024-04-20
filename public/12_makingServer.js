"use strict";
// How to create server in NodeJs:
const http = require("http");
http.createServer((req, resp) => {
    resp.write("<h1>This is Hussain.</h1>");
    resp.end();
}).listen(4500);
// To see the display, go to browser, type 'localhost:4500' and press enter. 
