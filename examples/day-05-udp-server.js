const dgram = require('node:dgram');

const server = dgram.createSocket('udp4');

server.on("message", (message, remoteInfo) => {
    console.log("Message received: ", message.toString());
    console.log("Sender Address: ", remoteInfo.address);
    console.log("Sender Port: ", remoteInfo.port);
});

server.on("listening", () => {
    const address = server.address();

    console.log(
        `UDP Server listening on ${address.address}:${address.port}`
    );
});

server.bind(41234, "127.0.0.1");