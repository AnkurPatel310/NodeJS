const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    // Load header and footer file

    let collectHeaderData = fs.readFileSync('html/header.html', 'utf-8');
    let collectFooterData = fs.readFileSync('html/footer.html', 'utf-8');

    let file = "/web";

    if(req.url != "/"){
        file=req.url;
    }
    
    if (req.url != '/css/style.css') {
        fs.readFile('html'+file+'.html', 'utf-8', (err, data) => {

            if (err) {
                res.writeHead(500, { "content-type": 'text/plain' });
                res.write("Internal Server Error");
                res.end();
                return false;
            }

            res.writeHead(200, { "content-type": 'text/html' });
            res.end(collectHeaderData + "" + data  + "" +  collectFooterData);
        })
    } else if (req.url == '/css/style.css') {
        fs.readFile('css/style.css', 'utf-8', (err, data) => {

            if (err) {
                res.writeHead(500, { "content-type": 'text/plain' });
                res.write("CSS not found");
                res.end();
                return false;
            }

            res.writeHead(200, { "content-type": 'text/css' });
            res.end(data);
        })
    }

}).listen(6100);