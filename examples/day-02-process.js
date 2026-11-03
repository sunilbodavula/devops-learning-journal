console.log("DevOps learning: Node.js process started.");
console.log(`Process ID: ${process.pid}`);
console.log("Press Ctrl+C to stop this process.");

setInterval(() => {
    console.log(`Process is still running: ${new Date().toLocaleTimeString()}`);
}, 5000);
