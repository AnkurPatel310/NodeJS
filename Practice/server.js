const http = require('http');
http.createServer((req,res)=>{
    res.write("Server response"); // Send output to browser
    res.end(); // response end is required
}).listen(4800);