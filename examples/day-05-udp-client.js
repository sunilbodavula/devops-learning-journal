const dgram = require('node:dgram');

const client = dgram.createSocket('udp4');

const message = Buffer.from("Hello UDP Server!");

client.send(message, 41234, "127.0.0.1", (error) => {
    if(error){
        console.error("Error sending message: ", error);
    }else{
        console.log("UDP datagram sent.");
    }

    client.close();
});