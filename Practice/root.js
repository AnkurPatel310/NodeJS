const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const userForm = require('./userForm');
const formSubmit = require('./formSubmit');

http.createServer((req, res) => {

    res.writeHead(200, { "content-type": 'text/html' });
    if (req.url == '/') {
        userForm(req, res);        
    } else if (req.url == '/submit') {                        
        formSubmit(req, res);        
    }

    res.end();
}).listen(6100);