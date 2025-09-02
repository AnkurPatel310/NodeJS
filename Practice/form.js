const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, res) => {
    fs.readFile('html/web.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { "content-type": 'text/plain' });
            res.write("Internal Server Error");
            res.end();
            return
        }

        if (req.url == '/') {
            res.writeHead(200, { "content-type": 'text/html' });
            res.write(data);
            res.end();
        } else if (req.url == '/submit') {
            let bodyData = [];
            req.on('data', (chunk) => {
                bodyData.push(chunk);
            });

            req.on('end', () => {
                let rawData = Buffer.concat(bodyData).toString();
                let readableData = querystring.parse(rawData);
                // console.log(readableData);
                res.writeHead(200, { "content-type": 'text/html' });
                res.write("<h3>Data Submitted</h3>");
                res.write("<p>Username : " + readableData.username + "</p>");
                res.end();
            })
        }

    })

}).listen(6100);