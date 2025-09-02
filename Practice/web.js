const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('html/web.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { "content-type": 'text/plain' });
            res.write("Internal Server Error");
            res.end();
            return
        }

        res.writeHead(200, { "content-type": 'text/html' });
        res.write(data);
        res.end();
    })

}).listen(6100);