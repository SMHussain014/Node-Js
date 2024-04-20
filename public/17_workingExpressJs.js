"use strict";
/*
Express Js is a frame-work of Node Js, like Angular is a framework of JavaScript.
In 90% applications of Node Js, It is used, e.g. creating APIs, routes, middleware
and request handling etc.
To install, just type 'npm i express' in terminal.
*/
const express = require('express');
const app = express();
// How to create routes
app.get('', (req, res) => {
    console.log('Data sent by Browser', req.query.name);
    res.send('Hello, This is the "Home Page".');
});
app.get('/About', (req, res) => {
    res.send('Hello, This is the "About Us Page".');
});
// create a Server
app.listen(4200);
/*
Always remember that it is client who made a 'request', whereas server gives 'response'.
To load server's Home Page, type in browser 'localhost:4200' and press enter.
To load server's other Page, type in browser 'localhost:4200/name_Page' and press enter
To make a request, type in browser 'localhost:4200?name=Hussain' and press enter.
*/
// rendering HTML and JSON
app.get('/Help', (req, res) => {
    res.send(`<h1>Hello, This is the "Help Page".</h1>
    <input type="text" placeholder="User's Name:">
    <input type="Submit" name="Click Me" value="Click Me">
    <br><a href="/DataBase">Go to Data Base Page</a>`);
});
app.get('/DataBase', (req, res) => {
    res.send(`<h1>Hello, This is the "Data Base Page".</h1>
    [{
        name: Hussain,
        email: hussain.sm@gmail.com
    },
    {
        fatherName: Ahmed,
        address: Okara
    }]
    <br><a href="/Help">Go to Help Page</a>`);
});
