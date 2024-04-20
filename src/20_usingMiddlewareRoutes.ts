// import express, path and initialize them.
const express3 = require('express');
const myPath = require('path');
const myApps1 = express3();
const myDirPaths = myPath.join(__dirname, 'HTML_Files');
// call server
myApps1.listen(4500);
// You can use Middleware to anyone of the routes, after the name of that route in get()
// importing Middleware from different file
const reqFilters = require('./21_Middleware.js');
const route = express3.Router();
// Applying Middleware
route.use(reqFilters);
// Setting up Routes
route.get('/products', (req, resp) => {
    resp.sendFile(`${myDirPaths}/products.html`);
    // resp.send('Welcome to the "Home" page');
});
route.get('/aboutUs', (req, resp) => {
    resp.sendFile(`${myDirPaths}/aboutUs.html`);
    // resp.send('Welcome to the "About Us" page');
});
route.get('/help', (req, resp) => {
    resp.sendFile(`${myDirPaths}/help.html`);
    // resp.send('Welcome to the "Help" page');
});
myApps1.use('/', route);
// Setting up Root Page
myApps1.get('', (_, resp) => {
    resp.sendFile(`${myDirPaths}/index.html`);
});
// Setting up 404 Page
myApps1.get('*', (_, resp: any) => {
    resp.sendFile(`${myDirPaths}/errorPage.html`);
});