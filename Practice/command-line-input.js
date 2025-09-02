const http = require('http');

const arg = process.argv;

http.createServer((req, res) => {
    res.setHeader("Content-Type","text/html");
    res.write("Input : " + arg[2]);
    res.end();
}).listen(6100);