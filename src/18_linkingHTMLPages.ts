const express1 = require('express');
const ejs = require('ejs');
const Path = require('path');
const App = express1();
const DirPath = Path.join(__dirname, 'HTML_Files');
// using middleware 'use' to link HTML Pages
// myApp.use(express1.static(DirPath));
/*
If we use static method, it will require extensions, hence we must use get method
*/
App.listen(4500);
// How to remove extension from the browser
App.get('/products', (_, resp: any) => {
    resp.sendFile(`${DirPath}/products.html`);
});
App.get('/aboutUs', (_, resp: any) => {
    resp.sendFile(`${DirPath}/aboutUs.html`);
});
App.get('/help', (_, resp: any) => {
    resp.sendFile(`${DirPath}/help.html`);
});
// Setting up Root/ Home Page
App.get('', (_, resp: any) => {
    resp.sendFile(`${DirPath}/index.html`);
});
/* 
Template Engine is used to create dynamic pages
It uses ejs package for this purpose
A static page is formed from a HTML page.
A dynamic page takes data from the database or server.
How to set ejs, type myApp.set('view engine', 'ejs');
*/
App.set('view engine', 'ejs');
App.get('/profile', (_, resp: any) => {
    const user = {
        name: 'Hussain',
        email: 'test@gmail.com',
        city: 'Islamabad',
        skills: ['C++', 'Python', 'JavaScript', 'NodeJs', 'HTML', 'CSS']
    };
    resp.render(`profile.ejs`, {user});
});
App.get('/login', (_, resp: any) => {
    resp.render(`login.ejs`);
});
// If we make a header file, it can be included only in ejs files
// Setting up 404 Page. It must be made at the end of all pages.
App.get('*', (_, resp: any) => {
    resp.sendFile(`${DirPath}/errorPage.html`);
});