const http = require('http');
const url = require('url');

//http服务器
http.createServer((req, res) => {
    const pathName = url.parse(req.url).pathname;
    if (['/user'].includes(pathName)) {
        let userHtml = require('./controller/user.js');

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(userHtml);
    } else {
        res.writeHead(404);
        res.end('<h1>404 not found.</h1>');
    }
}).listen(8888);