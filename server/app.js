const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("Request for " + req.url);
    var path = "html/index.html";
    if(req.url != '/') {
        path = req.url.substr(1);
    }

    if(path == 'favicon.ico') {
        return;
    }
    var dotoffset = path.lastIndexOf('.');
    var type = dotoffset == -1
                    ? 'text/plain'
                    : {
                        '.html' : 'text/html',
                        '.ico' : 'image/x-icon',
                        '.jpg' : 'image/jpeg',
                        '.png' : 'image/png',
                        '.gif' : 'image/gif',
                        '.css' : 'text/css',
                        '.js' : 'text/javascript'
                        }[ path.substr(dotoffset) ];
    
    console.log("Path: " + path + " Type: " + type);
    fs.readFile(path, function(err, input) {
        if(err) {
            throw err;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', type);
        res.write(input);
        res.end();
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
