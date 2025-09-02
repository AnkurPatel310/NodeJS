const http = require('http');

const userData = [{
    name: "AKP",
    no: 1,
    code: "A01"
},
{
    name: "DKP",
    no: 2,
    code: "A02"
},
{
    name: "KP",
    no: 3,
    code: "A03"
}];

http.createServer((req, res) => {
    res.setHeader("Content-Type","application/json");
    res.write(JSON.stringify(userData));
    res.end();
}).listen(6100);