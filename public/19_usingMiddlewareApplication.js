"use strict";
/*
Middle-Wares are sort of 'functions' and can only be used on 'routes'.
They can access as well as modify the 'request' and 'response' so that certain conditions
may be applied upon request & response.
Actually, they put some restrictions upon the desired users, e.g. checking whether a user is
logged in or not, what is the age of user, whether he belongs to allowed country or not etc.
Middle-Wares can be used multi-times whereas we cannot do this with routes.
*/
// import express, path and initialize them.
const express2 = require('express');
const Paths = require('path');
const myApps = express2();
const DirPaths = Paths.join(__dirname, 'HTML_Files');
// call server
myApps.listen(4500);
// Setting up middleware
const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send('Please enter your Age: ');
    }
    else if (req.query.age < 18) {
        resp.send('Sorry! You are under age.');
    }
    else {
        next();
    }
    ;
};
// applying Middleware
myApps.use(reqFilter);
// Setting up Routes
myApps.get('', (req, resp) => {
    resp.sendFile(`${DirPaths}/index.html`);
    // resp.send('Welcome to the "Home" page');
});
myApps.get('/aboutUs', (req, resp) => {
    resp.sendFile(`${DirPaths}/aboutUs.html`);
    // resp.send('Welcome to the "About Us" page');
});
myApps.get('/help', (req, resp) => {
    resp.sendFile(`${DirPaths}/help.html`);
    // resp.send('Welcome to the "Help" page');
});
/*
Types of Middle-Ware are:
(i)     Application level Middleware (applies on the whole application)
(ii)    Route level Middleware (applies on certain routes)
(iii)   Error handling Middleware
(iv)    Built-in Middleware
(v)     Third-party Middleware
*/ 
