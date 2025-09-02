const http = require('http');

//we can create multiple server

// server1 running on port 4800

const server1 = http.createServer((req,res)=>{
    res.write("Server response : 4800"); // Send output to browser
    res.end(); // response end is required
}).listen(4800);

// server1 running on port 4900

const server2 = http.createServer((req,res)=>{
    res.write("Server response : 4900"); // Send output to browser
    res.end(); // response end is required
}).listen(4900);