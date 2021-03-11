const fs = require('fs');

const requestHandler = (req, res) => {
    // console.log(req);
    // process.exit();
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    
    if(url === '/message' && method ==='POST') {
        const body = [];
        req.on('data', (chunk) => {
            // console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedbody = Buffer.concat(body).toString();
            // console.log(parsedbody);
            const message = parsedbody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
            }); 
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>My first page</title></head>');
    res.write('<body><h1>Hello from Node</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;


/*
other methods:
module.exports = {
    handler = requestHandler;
    other = 'anything else;
}
======================================
module.exports.handler = requestHandler;
module.exports.other = 'anything else';
=======================================
exports.handler = requestHandler;
exports.other = 'anything else';
=======================================
*/