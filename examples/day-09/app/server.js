const http = require('node:http');

const port = Number(process.env.PORT || 3000);
const instance = process.env.INSTANCE_NAME || "local";

const server = http.createServer((req, res) => {
    const response = {
        service: "demo-api",
        instance: instance,
        method: req.method,
        path: req.url,
        message: "Request handled successfully"
    };

    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify(response));
});

server.listen(port, "0.0.0.0", () => {
    console.log(`${instance} listening on port ${port}`);
});