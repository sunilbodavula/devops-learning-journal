console.log("Node.js resource monitoring started.");
console.log(`Process ID: ${process.pid}`);

setInterval(() => {
    const memory = process.memoryUsage();

    console.log({
        time: new Date().toLocaleTimeString(),
        heapUsedMB: (memory.heapUsed / 1024 / 1024).toFixed(2),
        rssMB: (memory.rss / 1024 / 1024).toFixed(2)
    });
}, 5000);
