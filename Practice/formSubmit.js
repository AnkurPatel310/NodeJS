const querystring = require('querystring');

function formSubmit(req, res) {
    let bodyData = [];
    req.on('data', (chunk) => {
        bodyData.push(chunk);
    });

    req.on('end', () => {
        let rawData = Buffer.concat(bodyData).toString();
        let readableData = querystring.parse(rawData);
        let userName = readableData.username;        
        console.log(userName);
    })
    res.write(`<h1>Data Submitted</h1>`);
}

module.exports = formSubmit;