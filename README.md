# DevOps Learning Journal

## Day 1: Introduction to DevOps

### What is DevOps?
DevOps combines practices, collaboration, and automation
to help teams deliver and maintain software reliably.

### Why do we need DevOps?
- To reduce manual work.
- To make software delivery more reliable.
- To identify problems earlier.
- To improve collaboration between development and operations.
- To monitor applications after deployment.

### My full-stack application
- Frontend: React
- Backend: Node.js and Express || Java and Springboot
- Database: PostgreSQL

### Software delivery journey
1. Write code.
2. Test the application.
3. Build the application.
4. Deploy it.
5. Monitor it.
6. Fix problems and improve the application.

### What I learned
DevOps is not a single tool. It is a way of improving
the process of building, delivering, and maintaining software.

## Day 2: Programs and Processes

### What is an operating system?
An operating system manages computer resources and provides
services that applications need to run.

### Program vs. Process
A program contains instructions.
A process is a running instance of a program.

### What I practised
- Created a JavaScript program that keeps running.
- Started the program using Node.js.
- Retrieved its Process ID using process.pid.
- Inspected the running process using PowerShell.
- Used Get-Process to inspect process information.
- Used Get-CimInstance to identify a process by its command line.
- Stopped the process using Ctrl+C.
- Verified that the process was no longer running.

### Key takeaway
A running application is managed by the operating system
as one or more processes. Process inspection helps us
investigate application behavior.

## Day 2.2: CPU and Memory Monitoring

### Concepts learned
- CPU executes program instructions.
- Memory holds data used by running applications.
- Node.js provides process.memoryUsage().
- heapUsed measures JavaScript heap memory in use.
- rss reports resident memory occupied by the process.
- PowerShell Get-Process provides process information.
- CPU in Get-Process represents cumulative CPU time in seconds.

### Practical work
- Created a Node.js resource-monitoring program.
- Observed memory usage over time.
- Retrieved the process ID.
- Inspected the same process using PowerShell.
- Compared Node.js memory readings with Windows process information.

### Key takeaway
Resource measurements help investigate application performance,
but individual readings do not necessarily identify the root cause
of a performance problem.

## Day 3: Networking Fundamentals

### What is networking?
Networking allows computers and devices to communicate and exchange information.

### What is an IP address?
An IP address identifies a network interface for communication using the Internet Protocol.

Example: `192.168.1.10`

### What is localhost?
Localhost refers to the computer making the request.

Common loopback addresses:
- IPv4: `127.0.0.1`
- IPv6: `::1`

### Practical exercises
- Used `ipconfig` to inspect network configuration.
- Identified the computer's IPv4 address.
- Used `ping 127.0.0.1` to test loopback communication.
- Used `ping localhost` to observe hostname resolution.

### Key takeaways
- IP addresses help identify network interfaces.
- Localhost refers to the current computer.
- Different devices have their own localhost.
- Ping uses ICMP and does not verify HTTP application health.

### What I learned
I understood how computers identify themselves for network communication and how localhost allows an application to communicate with the same computer.

## Day 4: Ports and Client-Server Communication

### What is a port?
A port is a logical communication endpoint identified by
a number. It helps the operating system deliver network
traffic to the appropriate application endpoint.

### Common ports
- 80: HTTP
- 443: HTTPS
- 3000: Common Node.js development port
- 5432: PostgreSQL
- 6379: Redis
- 8080: Common Spring Boot development port

### Client-server communication
A client sends an HTTP request to a server.
The server processes the request and sends an HTTP response.

### What happens with app.listen(3000)?
It starts the HTTP server listening on port 3000.

### Practical exercises
- Created an HTTP server using Node.js built-in HTTP module.
- Started the server on 127.0.0.1:3200.
- Sent an HTTP request using Invoke-RestMethod.
- Inspected the listening port using Get-NetTCPConnection.
- Identified the process using its PID.
- Tested TCP connectivity using Test-NetConnection.
- Stopped the server and verified that the port was no longer listening.

### Key takeaways
- IP addresses identify network interfaces.
- Ports identify communication endpoints.
- Multiple applications can use different ports on the same computer.
- A running process does not necessarily mean a port is listening.
- TCP connectivity and HTTP application health are different checks.

## Day 5: TCP and UDP

### What is TCP?
TCP stands for Transmission Control Protocol.

TCP is a connection-oriented transport protocol that
provides reliable and ordered delivery of data.

### TCP three-way handshake
1. SYN
2. SYN-ACK
3. ACK

### What is UDP?
UDP stands for User Datagram Protocol.

UDP is a connectionless transport protocol.
It does not guarantee delivery or ordering of datagrams.

### TCP vs UDP
- TCP provides reliable, ordered delivery.
- UDP does not guarantee delivery or ordering.
- TCP establishes a connection using a handshake.
- UDP sends datagrams without a TCP-style handshake.

### Practical exercises
- Tested TCP connectivity using Test-NetConnection.
- Sent an HTTP request using Invoke-WebRequest.
- Created a UDP server using Node.js dgram.
- Created a UDP client using Node.js dgram.
- Sent a UDP datagram to the server.
- Inspected the UDP endpoint using Get-NetUDPEndpoint.

### Key takeaways
- TCP and UDP are transport-layer protocols.
- HTTP/1.1 and HTTP/2 commonly use TCP.
- HTTPS uses TLS to protect HTTP communication.
- HTTP/3 uses QUIC over UDP.
- TCP connectivity and successful application responses
  are different things.