const http = require('http');

const city = "Chikhli";

http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.write(`We are from `+city+``);
    res.end();
    // process.exit();
}).listen(4800);