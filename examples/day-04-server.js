const http = require('node:http');

const HOST = "127.0.0.1";
const PORT = 3200;

const server = http.createServer((req, res) => {

    console.log(`Incoming request: ${req.method} ${req.url}`);

    res.writeHead(200, {"Content-Type": "text/plain, charset=utf-8"});

    res.end("Hello! your node js http server is working.");

});

server.listen(PORT, HOST, () => {
    console.log(`Server listening at http://${HOST}:${PORT}`);
});